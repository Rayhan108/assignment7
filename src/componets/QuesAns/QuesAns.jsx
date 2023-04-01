import React from 'react';


const QuesAns = () => {
    return (
        <div className='container'>
            <div className="title text-center my-5 ">
                <h2>Question Answer</h2>
            </div>
            <div className="ans-section">
             <h3>1.Write down the difference between Props and state?</h3>
                <p className='fw-bold'><span className='text-primary'>Ans</span>: <br></br>Props:<br></br>1.Propsare passed down from the parent component to its child component.<br></br>
2.Props are read-only and cannot be modified by the child component.<br></br>
3.Props are used to provide configuration or data to a component.<br></br>
State:<br></br>
1.State can store data that may change.<br></br>
2.State can be modified by the component itself using the setState() method.<br></br>
3.state not only use for store data it also use for display dynamic data on UI</p>

             <h3>2.How does useState work?</h3>
                <p className='fw-bold'><span className='text-primary'>Ans</span>: useState is a hook in react.We use useState for store any kind of data.we can also use useState of showing data dynamically. It returns an array with two values.one of state variable and others is function to update it.The Hook takes an initial state value as an argument.</p>

             <h3>3.Purpose of useEffect other than fetching data?</h3>
                <p className='fw-bold'><span className='text-primary'>Ans</span>: useEffect not only use for fetching data but also use for rerender it without reload by using dependency.When set an dependecy on useState it rerender the functionality and update the value.</p>

             <h3>4.How Does React work?</h3>
                <p className='fw-bold'><span className='text-primary'>Ans</span>: React is a JavaScript library for building user interfaces.In React, we build UI using components.React uses a virtual DOM (Document Object Model) to manage our UI.When we render a component in React, it creates a virtual DOM tree that represents our UI.When an component is first rendered, React creates a new virtual DOM tree for it.React only updates the parts of the DOM that have changed.React also provides a way to handle user events, such as clicks or key presses.</p>
                
            </div>
        </div>
    );
};

export default QuesAns;