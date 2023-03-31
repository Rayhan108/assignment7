import React from 'react';
import "./BookmarkTitle.css"

const BookmarkTitle = ({bmark}) => {
    return (
        <div className='bookmark-title'>
            <p>{bmark.blog_title}</p>
        </div>
    );
};

export default BookmarkTitle;