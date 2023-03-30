import React, { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';
import BookmarkCard from '../BookmarkCard';
import "./Home.css"

const Home = () => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('fakedata.json').then(res=>res.json()).then(data=>setBlogs(data));
    },[])
    // console.log(blogs)
    return (
        <>
        <div className='home-container'>
            <div className="blogs-container">

{
    blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
}
            </div>
            <div className="bookmark-container">
                <BookmarkCard></BookmarkCard>
            </div>
        </div>
     
        </>

    );
};

export default Home;