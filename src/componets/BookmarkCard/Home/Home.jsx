import React, { useEffect, useState } from 'react';
import "./Home.css"

const Home = () => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('fakedata.json').then(res=>res.json()).then(data=>setBlogs(data));
    },[])
    console.log(blogs)
    return (
        <div className='home-container'>
            <div className="blogs-container">
<h2>blog coming here</h2>
            </div>
            <div className="bookmark-container">
                <h2>Bookmark list</h2>
            </div>
        </div>
    );
};

export default Home;