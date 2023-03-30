import React, { useState } from 'react';
import "./BookmarkCard.css"

const BookmarkCard = ({spentTime}) => {
    
    
    return (
        <div className='bookmark-container'>
         <div className="bookmark">
         <h4>Spent time on read : {spentTime}</h4>
            <div className="bookmark-list">
                <h4>Bookmarked Blogs :</h4>
            </div>
         </div>
        </div>
    );
};

export default BookmarkCard;