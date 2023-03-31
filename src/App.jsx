import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componets/Header/Header';
import Home from './componets/BookmarkCard/Home/Home';



const App = () => {
  const [spentTime,setSpentTime]=useState("");


  const handleSpentTime=(time)=>{
    const priveousTime =JSON.parse(localStorage.getItem("spent-time"));
        if(priveousTime){
    const sum =priveousTime+time;
    JSON.stringify(localStorage.setItem("spent-time",sum));
    setSpentTime(sum)
        }else{
          JSON.stringify(localStorage.setItem("spent-time",time));
          setSpentTime(time);
        }
    
      }
  //  console.log(spentTime)

  return (
    <div>
<Header></Header>
<Home spentTime={spentTime} handleSpentTime={handleSpentTime} ></Home>

    </div>
  );
};

export default App;