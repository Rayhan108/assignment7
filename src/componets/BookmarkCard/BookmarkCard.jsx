import React, { useEffect, useState } from 'react';
import "./BookmarkCard.css"

const BookmarkCard = ({spentTime}) => {
    const [time,setTime]=useState("spentTime")
    useEffect(()=>{
        const getSpentTimeFromLocalStorage=JSON.parse(localStorage.getItem("spent-time"));
         if(getSpentTimeFromLocalStorage){
    
          setTime(getSpentTimeFromLocalStorage);
        }else{
          setTime(0)
        }
    },[spentTime])
    
    return (
        <div className='bookmark-container'>
         <div className="bookmark">
         <h4>Spent time on read : {time}</h4>
            <div className="bookmark-list">
                <h4>Bookmarked Blogs :</h4>
            </div>
         </div>
        </div>
    );
};

export default BookmarkCard;