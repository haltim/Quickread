import React from 'react';
import './BlogPost.css';
import Vector from "../img/Vector.png";
import horizontaldivider from "../components/horizontaldivider"

const BlogCard = (props) => {
  return (
    <>
    <div className='blog-card'>
      <div className="blog-card-con">
        <div className="blog-card-header">
          <div className="blog-card-category">Entertainment</div>
          <div className="blog-card-source">naijaloaded.com</div>
        </div>
        <div className="blog-card-content">
          <div className="blog-card-title">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
      </div>
      <div className="blog-card-image">
        <img src={Vector} alt={props.title} />
      </div>

    </div>
    <horizontaldivider />
    </>

  );
};

export default BlogCard;


