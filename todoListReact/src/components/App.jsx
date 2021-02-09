import React, { useState } from "react";



function App() {
   const [addItem,setValue]=useState("");
   const [addListItem,setItem]=useState([]);

  function handleChange(event){
    // console.log(event.target.value);
    
     setValue(event.target.value);
  }
  
  function handleClick(){
    setItem((prevValue)=>{
       return [...prevValue,addItem];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" />
        <button onClick={handleClick} >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {addListItem.map((item)=>{
            return (<li>{item}</li>);
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
