import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

const TodoItem = ({ todo, index, setCurrentUserData, currentUserData }) => {
  const { currentUser, regUser, setRegUser } = useContext(LoginContext);


  const toggleCompleted = () => {
    const updatedTodo = currentUserData.todos.map((currentTodo, i) =>
      currentTodo.title === todo.title ? { ...currentTodo, completed: !currentTodo.completed } : currentTodo
    );

    const updatedUserData = { ...currentUserData, todos: updatedTodo };

    const updatedRegUser = regUser.map((user) =>
      user.userName === currentUser ? updatedUserData : user
    );

    setRegUser(updatedRegUser)
    setCurrentUserData(updatedUserData)
  };


  return (
    <div key={index} >
      <h2>Title: {todo.title}</h2>
      <p>Description: {todo.description}</p>
      <p>
        Completed: {`${todo.completed ? "Yes" : "No"}`}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
        ></input>
      </p>
      <p>Estemated time: {todo.estimation} minutes</p>
      <p>Category: {todo.category}</p>
      <p>Deadline: {todo.deadline}</p>
    </div>
  );
};

export default TodoItem;
