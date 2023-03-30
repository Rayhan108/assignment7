import React from 'react';
import "./Blog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blog = ({blog,handleSpentTime}) => {
    const {authorName,TimeNeedForWatch,blog_title,cover_img,author_img,published_date} =blog;
    // console.log(blog)
    // console.log(handleSpentTime)
    return (
        <div className='blog-container'>
         <img src={cover_img} alt="" />
        <div className="author-section">
        <div className="author">
         <div className='writter'>
                 <img src={author_img} alt="" />
                 </div>
        <div className='date'>
                 <h5>{authorName}</h5>
                 <p>{published_date}</p>
             </div>
         </div>
             <p>{TimeNeedForWatch} min read <FontAwesomeIcon icon={faBookmark} /></p>
        </div>
        <h3>{blog_title}</h3>
        <div className="mark-read">
         <p   onClick={()=>handleSpentTime(TimeNeedForWatch)} >Mark as read</p>
        </div>
          </div>
       
    );
};

export default Blog;