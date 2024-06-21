// import redis from '../../lib/redis';
// import { promises as fs } from 'fs';
// import path from 'path';

// const COMMENTS_FILE_PATH = path.join(process.cwd(), 'public', 'comments.json');

// const saveCommentToFile = async (comment) => {
//   try {
//     const fileContents = await fs.readFile(COMMENTS_FILE_PATH, 'utf8');
//     const comments = JSON.parse(fileContents);
//     comments.push(comment);
//     await fs.writeFile(COMMENTS_FILE_PATH, JSON.stringify(comments, null, 2), 'utf8');
//   } catch (error) {
//     console.error('Error saving comment to file:', error);
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { username, text, page } = req.body;

//     if (!username || !text || !page) {
//       return res.status(400).json({ error: 'Username, text, and page are required' });
//     }

//     const comment = { username, text, page, timestamp: new Date().toISOString() };

//     await redis.lpush('comments', JSON.stringify(comment));
//     await saveCommentToFile(comment);

//     res.status(201).json({ message: 'Comment added successfully', comment });
//   } else if (req.method === 'GET') {
//     try {
//       const fileContents = await fs.readFile(COMMENTS_FILE_PATH, 'utf8');
//       const comments = JSON.parse(fileContents);

//       res.status(200).json({ comments });
//     } catch (error) {
//       res.status(500).json({ error: 'Error reading comments file' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }















// import redis from '../../lib/redis';
// import { promises as fs } from 'fs';
// import path from 'path';

// const COMMENTS_FILE_PATH = path.join(process.cwd(), 'public', 'comments.json');

// const saveCommentToFile = async (comment) => {
//   try {
//     const fileContents = await fs.readFile(COMMENTS_FILE_PATH, 'utf8');
//     const comments = JSON.parse(fileContents);
//     comments.push(comment);
//     await fs.writeFile(COMMENTS_FILE_PATH, JSON.stringify(comments, null, 2), 'utf8');
//   } catch (error) {
//     console.error('Error saving comment to file:', error);
//   }
// };

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { username, email, text, page } = req.body;

//     if (!username || !email || !text || !page) {
//       return res.status(400).json({ error: 'Username, email, text, and page are required' });
//     }

//     const comment = { username, email, text, page, timestamp: new Date().toISOString() };

//     await redis.lpush('comments', JSON.stringify(comment));
//     await saveCommentToFile(comment);

//     res.status(201).json({ message: 'Comment added successfully', comment });
//   } else if (req.method === 'GET') {
//     try {
//       const fileContents = await fs.readFile(COMMENTS_FILE_PATH, 'utf8');
//       const comments = JSON.parse(fileContents);

//       res.status(200).json({ comments });
//     } catch (error) {
//       res.status(500).json({ error: 'Error reading comments file' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }

import redis from '../../lib/redis';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const COMMENTS_FILE_PATH = path.join(process.cwd(), 'public', 'comments.json');

const saveCommentToFile = async (comment) => {
  try {
    const fileContents = await fs.readFile(COMMENTS_FILE_PATH, 'utf8');
    const comments = JSON.parse(fileContents);
    comments.push(comment);
    await fs.writeFile(COMMENTS_FILE_PATH, JSON.stringify(comments, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving comment to file:', error);
    throw error;
  }
};

const isDuplicateCommentToday = async (email) => {
  try {
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    const commentsJson = await redis.get(`comments:${currentDate}`);
    if (commentsJson) {
      const comments = JSON.parse(commentsJson);
      return comments.some(comment => comment.email === email);
    }
    return false;
  } catch (error) {
    console.error('Error checking duplicate comment:', error);
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, text, page } = req.body;

    if (!username || !email || !text || !page) {
      return res.status(400).json({ error: 'Username, email, text, and page are required' });
    }

    try {
      const isDuplicate = await isDuplicateCommentToday(email);
      if (isDuplicate) {
        return res.status(400).json({ error: 'You have already posted a comment today' });
      }

      const commentId = uuidv4();
      const comment = { id: commentId, username, email, text, timestamp: new Date().toISOString(), page };

      await redis.lpush(`comments:${page}`, JSON.stringify(comment)); // Store in Redis
      await saveCommentToFile(comment); // Store in JSON file

      // Save to daily comments cache
      const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
      let existingComments = await redis.get(`comments:${currentDate}`);
      existingComments = existingComments ? JSON.parse(existingComments) : [];
      existingComments.push(comment);
      await redis.set(`comments:${currentDate}`, JSON.stringify(existingComments));

      res.status(201).json({ message: 'Comment added successfully', comment });
    } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).json({ error: 'Failed to add comment' });
    }
  } else if (req.method === 'GET') {
    const { page } = req.query;

    try {
      const fileContents = await fs.readFile(COMMENTS_FILE_PATH, 'utf8');
      const comments = JSON.parse(fileContents);

      // Filter comments based on the page
      const filteredComments = comments.filter(comment => comment.page === page);

      res.status(200).json({ comments: filteredComments });
    } catch (error) {
      console.error('Error reading comments file:', error);
      res.status(500).json({ error: 'Error reading comments file' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
