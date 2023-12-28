// Blog.js
import React, { useState, useEffect } from 'react';
import './Blog.css'; // Import the CSS file

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch and display blog posts from your server (assuming it's running on http://localhost:3002)
    fetch('http://localhost:3002/posts')
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 5))) // Display only the first 5 posts for this example
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul className="blog-list"> {/* Add a class to the ul element */}
        {posts.map(post => (
          <li key={post.id} className="blog-post"> {/* Add a class to the li element */}
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <img src={post.picture} alt={`Post ${post.id}`} style={{ maxWidth: '100%' }} />
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
