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

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, email, text, page } = req.body;

    if (!username || !email || !text || !page) {
      return res.status(400).json({ error: 'Username, email, text, and page are required' });
    }

    const commentId = uuidv4();
    const timestamp = new Date().toISOString();
    const comment = { id: commentId, username, email, text, timestamp, page };

    try {
      await redis.lpush(`comments:${page}`, JSON.stringify(comment));
      await saveCommentToFile(comment);

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
