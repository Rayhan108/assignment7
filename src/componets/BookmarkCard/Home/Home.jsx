import React, { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';
import BookmarkCard from '../BookmarkCard';
import "./Home.css"
import { ToastContainer, toast } from 'react-toastify';

const Home = ({spentTime,handleSpentTime}) => {
    const [blogs,setBlogs]=useState([])
    const [bookmark,setBookmark]=useState([])

    const handleBookmark=(blog)=>{
    
     const newbookmark=[...bookmark,blog]

    //  ---------------------toast section--------------------------------

        const addededBookmark =bookmark.find(sBlog =>sBlog.id === blog.id);

        if(addededBookmark){
       
            toast("Wow so easy!")
            setBookmark(newbookmark)
         
        }else{
       
           setBookmark(newbookmark)
       
        }
      

    
    }
 
    
    

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[])
    return (
        <>
        <div className='home-container'>
            <div className="blogs-container">

{
    blogs.map(blog=><Blog key={blog.id} blog={blog} handleSpentTime={handleSpentTime} handleBookmark={handleBookmark}></Blog>)
}
            </div>
            <div className="bookmark-container">
                <BookmarkCard bookmark={bookmark}  spentTime={spentTime}></BookmarkCard>
            </div>
        </div>
     
        </>

    );
};

export default Home;