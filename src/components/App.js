import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const handleClick = (e) => {
    //console.log("clicked");
    console.log("task to be added : ", input);
    setList([...list, input]);
    setInput("");
  };
  const handleChange = (e) => {
    //console.log(e.target.value)
    setInput(e.target.value);
  };
  const handleDelete =(indexToDelete)=>{
    console.log("delete task with index : ",indexToDelete);
    const newList = list.filter((item,index)=>index!=indexToDelete);
    setList(newList);
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>To-Do-List</h1>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleClick}>Add Todo</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
