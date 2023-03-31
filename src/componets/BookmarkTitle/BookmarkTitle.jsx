import React from 'react';

const BookmarkTitle = ({bmark}) => {
    return (
        <div>
            <h2>{bmark.blog_title}</h2>
        </div>
    );
};

export default BookmarkTitle;