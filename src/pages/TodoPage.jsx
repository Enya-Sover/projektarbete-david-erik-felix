import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { Link } from "react-router-dom";

const TodoPage = () => {
  const { currentUser, regUser, setRegUser } = useContext(LoginContext);

  const [currentUserData, setCurrentUserData] = useState(
    regUser.find((user) => user.userName === currentUser)
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimation, setEstimation] = useState(0);
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [duplicate, setDuplicate] = useState(false);

  const [error, setError] = useState("");

  let addTodo = () => {
    if (!currentUser) {
      alert("You do not seem to be logged in.");
    }

    const newTodo = {
      id: currentUserData.todos.length + 1,
      title,
      description,
      estimation: parseInt(estimation),
      completed: false,
      category,
      deadline: parseInt(deadline),
    };

    setDuplicate(currentUserData.todos.some(info => info.title === title));

    if (duplicate) {
      setError("Titeln finns redan");
      setTimeout(() => {
        setError("");
        setDuplicate(false);
      }, 2000);
    } 

    else {
      console.log("hej från else");
      const updatedUserData = {
        ...currentUserData,
        todos: [...currentUserData.todos, newTodo],
      };

      const updatedRegUser = regUser.map((user) =>
        user.userName === currentUser ? updatedUserData : user
      );
      setRegUser(updatedRegUser);
      setCurrentUserData(updatedUserData);

      // window.location.reload();
    }
  };


  return (
    <>
      <input
        type="text"
        placeholder="Titel"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Beskrivning"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tidsestimat i minuter"
        onChange={(e) => setEstimation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kategori"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Deadline"
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button onClick={addTodo}>Lägg till todo</button>
      <p>{error}</p>
      <div className="todos">
        <div className="completedTodos">
          {currentUserData?.todos
            .filter((todo) => todo.completed === true)
            .map((todo, index) => {
              return (
                <TodoItem
                  todo={todo}
                  index={index}
                  key={index}
                  setCurrentUserData={setCurrentUserData}
                  currentUserData={currentUserData}
                />
              );
            })}
        </div>

        <div className="notCompletedTodos">
          {currentUserData?.todos
            .filter((todo) => todo.completed !== true)
            .map((todo, index) => {
              return (
                <TodoItem
                  todo={todo}
                  index={index}
                  key={index}
                  setCurrentUserData={setCurrentUserData}
                  currentUserData={currentUserData}
                />
              );
            })}
        </div>
      </div>
      <br />
      <Link to="/">Go back to homepage</Link>
    </>
  );
};

export default TodoPage;
