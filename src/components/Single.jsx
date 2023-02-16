import React from 'react';
import './BlogPost.css';
import { Link } from 'react-router-dom'; // assuming you are using react-router

function BlogPost() {
  return (
    <div className="blog-post">
      <div className="blog-post-header">
        <h1 className="blog-post-title">Blog Post Title</h1>
        <Link to="/" className="home-link">
          <i className="fas fa-home"></i>
        </Link>
      </div>
      <div className="blog-post-meta">
        <span className="blog-post-date">January 1, 2023</span>
        <i className="far fa-bookmark"></i>
      </div>
      <div className="blog-post-image">
        <img src="https://placeimg.com/640/480/nature" alt="Blog post" />
      </div>
      <div className="blog-post-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat urna et tortor aliquet, vitae euismod magna finibus. Pellentesque id sem purus. Vivamus id velit elit. Phasellus a ultrices leo. Donec volutpat faucibus enim, ut feugiat enim varius vitae. Curabitur ut turpis enim. Praesent sit amet eleifend velit. </p>
      </div>
    </div>
  );
}

export default BlogPost;
