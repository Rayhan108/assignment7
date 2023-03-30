import React, { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';
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
                <h2>Bookmark list</h2>
            </div>
        </div>
     
        </>

    );
};

export default Home;