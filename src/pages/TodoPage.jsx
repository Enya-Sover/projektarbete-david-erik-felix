import { useState } from "react";
import TodoItem from "../components/TodoItem";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { Link } from "react-router-dom";
import AddTodoItem from "../components/AddTodoItem";

const TodoPage = () => {
  const {
    currentUser,
    currentUserData,
    capitalizeFirstLetter,
    setCurrentUser,
  } = useContext(LoginContext);

  const [category, setCategory] = useState(null);
  const [complete, setComplete] = useState(null);

  const [risingFalling, setRisingFalling] = useState(null);
  const [deadlineEstimation, setDeadlineEstimation] = useState(null);

  return (
    <>
      <div className="greeting-container">
        <h2>Welcome {capitalizeFirstLetter(currentUser)}</h2>
        <p>What would you like to do today?</p>
      </div>
      <div className="todo-wrapper">

      
      <aside>
         
        <AddTodoItem />
        <span>Filter:</span>
        <section className="filter-section">
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
            name=""
            id=""
            onChange={(e) => setDeadlineEstimation(e.target.value)}
          >
            <option value="sortBy">Sort by category</option>
            <option value="deadline">Deadline</option>
            <option value="estimation">Time estimation</option>
          </select>
          <select
            name=""
            id=""
            onChange={(e) => setRisingFalling(e.target.value)}
          >
            <option value="order">Sort by order</option>
            <option value="rising">Rising</option>
            <option value="falling">Falling</option>
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
            <option value="">Show complete</option>
            <option value="true">Complete</option>
            <option value="false">Not complete</option>
          </select>
        </section>
      </aside>
      <main className="todos-main">
        <div className="todos">
          <div className="notCompletedTodos">
            <h2>Not completed todos:</h2>

            {currentUserData?.todos
              .sort((a, b) => {
                if (
                  risingFalling === "rising" &&
                  deadlineEstimation === "estimation"
                ) {
                  return a.estimation - b.estimation;
                } else if (
                  risingFalling === "falling" &&
                  deadlineEstimation === "estimation"
                ) {
                  return b.estimation - a.estimation;
                } else if (
                  risingFalling === "rising" &&
                  deadlineEstimation === "deadline"
                ) {
                  return a.deadline - b.deadline;
                } else if (
                  risingFalling === "falling" &&
                  deadlineEstimation === "deadline"
                ) {
                  return b.deadline - a.deadline;
                }
              })
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
                <TodoItem todo={todo} index={index} key={index} />
              ))}
          </div>
          <div className="completedTodos">
            <h2>Completed todos:</h2>
            {currentUserData?.todos
              .sort((a, b) => {
                if (
                  risingFalling === "rising" &&
                  deadlineEstimation === "estimation"
                ) {
                  return a.estimation - b.estimation;
                } else if (
                  risingFalling === "falling" &&
                  deadlineEstimation === "estimation"
                ) {
                  return b.estimation - a.estimation;
                } else if (
                  risingFalling === "rising" &&
                  deadlineEstimation === "deadline"
                ) {
                  return new Date(a.deadline) - new Date(b.deadline);
                } else if (
                  risingFalling === "falling" &&
                  deadlineEstimation === "deadline"
                ) {
                  return new Date(b.deadline) - new Date(a.deadline);
                } else {
                  return "";
                }
              })
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
                <TodoItem todo={todo} index={index} key={index} />
              ))}
          </div>
        </div>
      </main>
      </div>
    </>
  );
};

export default TodoPage;
