import React, {useState} from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <h1>This is my To-Do List</h1>
      <h1>Enter todo tasks</h1>
      <input
        type="text"
        placeholder="Enter task"
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue);
          // setTodo([...todo]);
          // setTodo((prev) => [...prev, e.target.value]);
        }}
      />
      <button
        onClick={(e) => {
          // todo.push(inputValue);
          setTodo([...inputValue]);
          // setTodo((prev) => [...prev, inputValue]);
          console.log(todo);
          // setInputValue("");
        }}
      >
        Submit
      </button>

      <div>
        {todo.map((item, index) => {
          return <li>{item}</li>;
        })}
      </div>
    </div>
  );
}

export default App;
