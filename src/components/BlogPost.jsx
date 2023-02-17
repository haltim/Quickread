import React from 'react';
import './BlogPost.css';
import { useNavigate } from 'react-router';
import Vector from "../img/Vector.png";


const SingleBlogPost = (props) => {
  const navigate = useNavigate();
  const handleclick=()=>{
      navigate("/singleblogpost")
  }
  return (
    <>
      <div className='blog-card' onClick={handleclick}>
        <div className="blog-card-con">
          <div className="blog-card-header">
            <div className="blog-card-category">Entertainment</div>
            <div className="blog-card-source">naijaloaded.com</div>
            <div className="blog-card-time">3hrs ago</div>
          </div>
          <div className="blog-card-content">
            <div className="blog-card-title">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
          </div>
        </div>
        <div className="blog-card-image">
          <img src={Vector} alt={props.title} />
        </div>
      </div>
      <div className="divider"></div>
    </>

  );
};

export default SingleBlogPost;


