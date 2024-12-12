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


  return (
    <>
      <AddTodoItem setCurrentUserData={setCurrentUserData} currentUserData={currentUserData}/>

      <div className="todos">
        <div className="notCompletedTodos">
          {currentUserData?.todos
            .filter((todo) => todo.completed !== true)
            .map((todo, index) => 
                  <TodoItem
                    todo={todo}
                    index={index}
                    key={index}
                    setCurrentUserData={setCurrentUserData}
                    currentUserData={currentUserData}
                  />)}
        </div>
        <div className="completedTodos">
          {currentUserData?.todos
            .filter((todo) => todo.completed === true)
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
