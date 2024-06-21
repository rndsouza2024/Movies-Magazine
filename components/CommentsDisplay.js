import { useState, useEffect } from 'react';

const styles = {
  container: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#D3D3D3',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '50px',
    width: '90%',
    maxWidth: '800px',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  commentList: {
    listStyleType: 'none',
    padding: '0',
    marginTop: '20px',
  },
  comment: {
    padding: '10px',
    borderBottom: '1px solid #eee',
  },
  commentAuthor: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  commentText: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  timestamp: {
    fontSize: '12px',
    color: '#777',
  },
  // Media query for screens <= 768px width
  '@media (max-width: 768px)': {
    container: {
      width: '100%',
      padding: '10px',
    },
  },
};

export default function CommentsDisplay({ page }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments?page=${encodeURIComponent(page)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }
      const data = await response.json();
      const formattedComments = data.comments.map(comment => ({
        ...comment,
        formattedTimestamp: formatTimestamp(comment.timestamp)
      }));
      setComments(formattedComments.reverse()); // Reverse to show latest comments first
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  useEffect(() => {
    if (page) {
      fetchComments();
    }
  }, [page]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    socket.addEventListener('message', function (event) {
      console.log('Message from server', event.data);
      fetchComments(); // Update comments when WebSocket message is received
    });

    return () => {
      socket.close(); // Clean up WebSocket connection
    };
  }, []);

  return (
    <div  style={styles.container}>
      <h2 style={styles.heading}> All Comments. </h2>
      <ul style={styles.commentList}>
        {comments.map(comment => (
          <li key={comment.id} style={styles.comment}>
            <p className='bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent text-black text-lg font-semibold mt-2' style={styles.commentText}>
              <strong style={styles.commentAuthor}>{comment.username}</strong>: {comment.text}
            </p>
            <p style={styles.timestamp}><small>{comment.formattedTimestamp}</small></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
