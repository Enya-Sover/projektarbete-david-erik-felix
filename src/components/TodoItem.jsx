import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { Link, useParams, useSearchParams } from "react-router-dom";


const TodoItem = ({ todo, index, setCurrentUserData, currentUserData }) => {
  const { currentUser, regUser, setRegUser } = useContext(LoginContext);
  const todos = currentUserData.todos
//   const {id} = useParams() kom ihåg hur useParams används

  const toggleCompleted = () => {
    const updatedTodo = todos.map(currentTodo =>
      currentTodo.title === todo.title
        ? { ...currentTodo, completed: !currentTodo.completed }
        : currentTodo
    );
    const updatedUserData = { ...currentUserData, todos: updatedTodo };
    const updatedRegUser = regUser.map((user) =>
      user.userName === currentUser ? updatedUserData : user
    );
    setRegUser(updatedRegUser);
    setCurrentUserData(updatedUserData);
  };

  const removeTodo = (ind) => {
    if (todos !== null || todos !== undefined) {
        const filteredTodos = currentUserData.todos.filter((_, i) => i !== ind)
        const updatedUserData = {...currentUserData, todos: filteredTodos}
        const updatedRegUser = regUser.map(user=> user.userName === currentUser ? updatedUserData : user)
        setRegUser(updatedRegUser)
        setCurrentUserData(updatedUserData)
    }
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
          onChange={toggleCompleted}
        ></input>
      </p>
      <p>Estemated time: {todo.estimation} minutes</p>
      <p>Category: {todo.category}</p>
      <p>Deadline: {todo.deadline}</p>
      <button onClick={()=> removeTodo(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;
