import React from 'react';
import "./Blog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
const Blog = (props) => {
    console.log(props.blog)
    const {authorName,TimeNeedForWatch,blog_title,cover_img,author_img,published_date} =props.blog;
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
            <a href="">Mark as read</a>
           </div>
            </div>
       
    );
};

export default Blog;