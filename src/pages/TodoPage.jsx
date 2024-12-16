import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { Link } from "react-router-dom";
import AddTodoItem from "../components/AddTodoItem";

const TodoPage = () => {
  const {
    currentUser,
    regUser,
    setCurrentUserData,
    currentUserData,
    capitalizeFirstLetter,
  } = useContext(LoginContext);

  const [category, setCategory] = useState(null);
  const [complete, setComplete] = useState(null);

  const [notCompleteOrder, setNotCompleteOrder] = useState(null);
  const [completeOrder, setCompleteOrder] = useState(null);

  const sortTodos = (todos, order) => {
    if (order === "deadline") {
      return [...todos].sort((a, b) => a.deadline - b.deadline);
    }
  };

  return (
    <>
      <h2>Welcome {capitalizeFirstLetter(currentUser)}</h2>
      <p>What would you like to do today?</p>
      <AddTodoItem
        setCurrentUserData={setCurrentUserData}
        currentUserData={currentUserData}
      />
      ƒ<span>Filter:</span>
      <select
        name="categoryFilter"
        onChange={(e) => {
          if (e.target.value === "") {
            setCategory(null);
          } else {
            setCategory(e.target.value);
          }
        }}
      >
        <option value="">Choose category</option>
        <option value="health">Health</option>
        <option value="housing">Housing</option>
        <option value="pleasure">Pleasure</option>
        <option value="economy">Economy</option>
        <option value="work">Work</option>
      </select>
      <select
        name="completeFilter"
        onChange={(e) => {
          if (e.target.value === "") {
            setComplete(null);
          } else if (e.target.value === "true") {
            setComplete(true);
          } else {
            setComplete(false);
          }
        }}
      >
        <option value="">All</option>
        <option value="true">Complete</option>
        <option value="false">Not complete</option>
      </select>
      <div className="todos">
        <div className="notCompletedTodos">
          <h2>Not completed todos:</h2>
          <select
            name=""
            id=""
            onChange={(e) => setNotCompleteOrder(e.target.value)}
          >
            <option value="sortBy">Sort by</option>
            <option value="deadline">Deadline</option>
            <option value="estimation">Time estimation</option>
          </select>
          <select name="" id="">
            <option value="order">Order</option>
            <option value="rising">Rising</option>
            <option value="falling">Falling</option>
          </select>
          {currentUserData?.todos
            .filter((todo) => {
              if (!category && !complete) {
                return !todo.completed && todo.title !== "";
              }
              if (category && !complete) {
                return (
                  todo.category === category &&
                  !todo.completed &&
                  todo.title !== ""
                );
              }
            })
            .map((todo, index) => (
              <TodoItem
                todo={todo}
                index={index}
                key={index}
                setCurrentUserData={setCurrentUserData}
                currentUserData={currentUserData}
              />
            ))}
        </div>
        <div className="completedTodos">
          <h2>Completed todos:</h2>
          <select
            name="complete"
            onChange={(e) => setCompleteOrder(e.target.value)}
          >
            <option value="sortBy">Sort by</option>
            <option value="deadline">Deadline</option>
            <option value="estimation">Time estimation</option>
          </select>
          <select name="" id="">
            <option value="order">Order</option>
            <option value="rising">Rising</option>
            <option value="falling">Falling</option>
          </select>
          {currentUserData?.todos
            .filter((todo) => {
              if (!category && complete === null) {
                return todo.completed && todo.title !== "";
              }
              if (category && complete === null) {
                return (
                  todo.category === category &&
                  todo.completed &&
                  todo.title !== ""
                );
              }
              if (!category && complete === true) {
                return todo.completed && todo.title !== "";
              }
              if (category && complete === true) {
                return (
                  todo.category === category &&
                  todo.completed &&
                  todo.title !== ""
                );
              }
            })
            .map((todo, index) => (
              <TodoItem
                todo={todo}
                index={index}
                key={index}
                setCurrentUserData={setCurrentUserData}
                currentUserData={currentUserData}
              />
            ))}
        </div>
      </div>
      <br />
      <Link to="/">Go back to homepage</Link>
    </>
  );
};

export default TodoPage;
