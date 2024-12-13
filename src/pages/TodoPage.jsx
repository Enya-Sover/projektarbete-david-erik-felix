import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { Link } from "react-router-dom";
import AddTodoItem from "../components/AddTodoItem";

const TodoPage = () => {
  const { currentUser, regUser } = useContext(LoginContext);

  const [currentUserData, setCurrentUserData] = useState(
    regUser.find((user) => user.userName === currentUser)
  );

  const [category, setCategory] = useState(null);
  const [complete, setComplete] = useState(null);

  return (
    <>
      <AddTodoItem
        setCurrentUserData={setCurrentUserData}
        currentUserData={currentUserData}
      />
      <select
        name="categoryFilter"
        onChange={(e) => {
          if (e.target.value === ''){
            setCategory(null)
          } else {
          setCategory(e.target.value)}}}
      >
        <option value=''>Choose category</option>
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
            setComplete(null)
          } else if (e.target.value === "true") {
            setComplete(true);
          } else {
            setComplete(false);
          }
        }}
      >
        <option value="">Sort by complete</option>
        <option value="true">Complete</option>
        <option value="false">Not complete</option>
      </select>

      <div className="todos">
        <div className="notCompletedTodos">
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
