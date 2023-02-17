import React from 'react';
import './Single.css';
import { Link } from 'react-router-dom'; // assuming you are using react-router

function SingleBlogPost() {
  return (
    <div id ="singleblogpost" className="singleblopost">
      <div className="blog-post-header">
        
      <Link className ="link" to='/'><svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.4167 17.3333L0 8.99999L10.4167 0.666656L12.2656 2.14582L3.69792 8.99999L12.2656 15.8542L10.4167 17.3333Z" fill="#545454" />
        </svg>

        </Link>
        <h1 className="blog-post-title">Blog Post Title</h1>
      </div>
      <div className="blog-post-meta">
        <span className="blog-post-date">January 1, 2023 by Ahmed Olawale</span>
        <i className="far fa-bookmark"></i>
      </div>
      <div className="blog-post-image">
        <img src="https://placeimg.com/640/480/nature" alt="Blog post" />
      </div>
      <div className="blog-post-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat urna et tortor aliquet, vitae euismod magna finibus. Pellentesque id sem purus. Vivamus id velit elit. Phasellus a ultrices leo. Donec volutpat faucibus enim, ut feugiat enim varius vitae. Curabitur ut turpis enim. Praesent sit amet eleifend velit. </p>
      </div>
      <div className='blog-post-link'>
        <a href ="">
          New Source Link
        </a>
      </div>
    </div>
  );
}

export default SingleBlogPost;


