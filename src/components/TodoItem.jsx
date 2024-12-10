import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

const TodoItem = ({ todo, index }) => {

  let toggleCompleted = () => {
    
  };

  return (
    <div key={index}>
      <h2>Title: {todo.title}</h2>
      <p>Description: {todo.description}</p>
      <p>
        Completed: {`${todo.completed ? "Yes" : "No"}`}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={()=> toggleCompleted}
        ></input>
      </p>
      <p>Estemated time: {todo.estimation}</p>
      <p>Category: {todo.category}</p>
      <p>Deadline: {todo.deadline}</p>
    </div>
  );
};

export default TodoItem;
