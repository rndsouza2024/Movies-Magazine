// import { useState, useEffect } from 'react';

// export default function CommentForm({ page }) {
//   const [username, setUsername] = useState('');
//   const [text, setText] = useState('');
//   const [comments, setComments] = useState([]);

//   const fetchComments = async () => {
//     const response = await fetch('/api/comments');
//     const data = await response.json();
//     setComments(data.comments.filter(comment => comment.page === page));
//   };

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('/api/comments', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, text, page }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       setComments(prevComments => [data.comment, ...prevComments]);
//       setUsername('');
//       setText('');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Comments</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={styles.input}
//         />
//         <textarea
//           placeholder="Comment"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           style={styles.textarea}
//         />
//         <button type="submit" style={styles.button}>Submit</button>
//       </form>
//       <ul style={styles.commentList}>
//         {comments.map((comment, index) => (
//           <li key={index} style={styles.comment}>
//             <strong style={styles.commentAuthor}>{comment.username}</strong>: {comment.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: '600px',
//     margin: '0 auto',
//     padding: '20px',
//     borderRadius: '8px',
//     backgroundColor: '#f9f9f9',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   heading: {
//     textAlign: 'center',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   input: {
//     padding: '10px',
//     marginBottom: '10px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     fontSize: '16px',
//   },
//   textarea: {
//     padding: '10px',
//     marginBottom: '10px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     fontSize: '16px',
//     minHeight: '100px',
//   },
//   button: {
//     padding: '10px 20px',
//     borderRadius: '4px',
//     border: 'none',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
//   commentList: {
//     listStyleType: 'none',
//     padding: '0',
//     marginTop: '20px',
//   },
//   comment: {
//     padding: '10px',
//     borderBottom: '1px solid #eee',
//   },
//   commentAuthor: {
//     color: '#007bff',
//   },
// };

















// import { useState, useEffect } from 'react';

// export default function CommentForm({ page }) {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [text, setText] = useState('');
//   const [comments, setComments] = useState([]);

//   const fetchComments = async () => {
//     const response = await fetch('/api/comments');
//     const data = await response.json();
//     setComments(data.comments.filter(comment => comment.page === page));
//   };

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('/api/comments', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, email, text, page }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       setComments(prevComments => [data.comment, ...prevComments]);
//       setUsername('');
//       setEmail('');
//       setText('');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Comments</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={styles.input}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//         />
//         <textarea
//           placeholder="Comment"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           style={styles.textarea}
//           disabled={!email}
//         />
//         <button type="submit" style={styles.button} disabled={!email}>Submit</button>
//       </form>
//       <ul style={styles.commentList}>
//         {comments.map((comment, index) => (
//           <li key={index} style={styles.comment}>
//             <strong style={styles.commentAuthor}>{comment.username}</strong>: {comment.text}
//             <div style={styles.commentEmail}>{comment.email}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: '600px',
//     margin: '0 auto',
//     padding: '20px',
//     borderRadius: '8px',
//     backgroundColor: '#f9f9f9',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   heading: {
//     textAlign: 'center',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   input: {
//     padding: '10px',
//     marginBottom: '10px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     fontSize: '16px',
//   },
//   textarea: {
//     padding: '10px',
//     marginBottom: '10px',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     fontSize: '16px',
//     minHeight: '100px',
//   },
//   button: {
//     padding: '10px 20px',
//     borderRadius: '4px',
//     border: 'none',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
//   commentList: {
//     listStyleType: 'none',
//     padding: '0',
//     marginTop: '20px',
//   },
//   comment: {
//     padding: '10px',
//     borderBottom: '1px solid #eee',
//   },
//   commentAuthor: {
//     color: '#007bff',
//   },
//   commentEmail: {
//     color: '#555',
//     fontSize: '12px',
//   },
// };

import { useState } from 'react';

export default function CommentForm({ page }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, text, page }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Comment added successfully:', data.comment);
      setUsername('');
      setEmail('');
      setText('');
      setErrorMessage('');
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Post a Comment</h2>
      {errorMessage && <div style={styles.error}>{errorMessage}</div>}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <textarea
          placeholder="Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.textarea}
          disabled={!email}
        />
        <button type="submit" style={styles.button} disabled={!email}>
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '50px',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  textarea: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    minHeight: '100px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
    textAlign: 'center',
  },
};

