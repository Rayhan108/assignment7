import React, { useEffect, useState } from 'react';
import "./BookmarkCard.css"
import BookmarkTitle from '../BookmarkTitle/BookmarkTitle';

const BookmarkCard = ({spentTime,bookmark}) => {
    // console.log(bookmark)
    const [time,setTime]=useState("spentTime")
    useEffect(()=>{
        const getSpentTimeFromLocalStorage=JSON.parse(localStorage.getItem("spent-time"));
         if(getSpentTimeFromLocalStorage){
    
          setTime(getSpentTimeFromLocalStorage);
        }else{
          setTime(0)
        }
    },[spentTime])
    // console.log(bookmark)
    return (
        <div className='bookmark-container'>
         <div className="bookmark">
         <h4>Spent time on read : {time} min</h4>
            <div className="bookmark-list">
                <h4>Bookmarked Blogs :{bookmark.length}</h4>
        
           
              {
                bookmark.map((bmark,index)=><BookmarkTitle bmark={bmark} key={index}></BookmarkTitle>)
              }
              
            </div>
         </div>
        </div>
    );
};

export default BookmarkCard;