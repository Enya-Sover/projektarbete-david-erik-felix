import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPen } from "@fortawesome/free-solid-svg-icons";

const EditTodo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    currentUserData,
    currentUser,
    setRegUser,
    regUser,
    setCurrentUserData,
    capitalizeFirstLetter,
  } = useContext(LoginContext);
  const [titleClicked, setTitleClicked] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [descriptionClicked, setDescriptionClicked] = useState(false);
  const [newDescription, setNewDescription] = useState("");
  const [estimateClicked, setEstimateClicked] = useState(false);
  const [newEstimate, setNewEstimate] = useState("");
  const [deadlineClicked, setDeatLineClicked] = useState(false);
  const [newDeadLine, setNewDeadline] = useState("");

  const todo = currentUserData?.todos.find((t) => t.id === id);

  const removeTodo = (id) => {
    if (todo !== null || todo !== undefined) {
      const filteredTodos = currentUserData.todos.filter((e) => e.id !== id);
      const updatedUserData = { ...currentUserData, todos: filteredTodos };
      const updatedRegUser = regUser.map((user) =>
        user.userName === currentUser ? updatedUserData : user
      );
      setRegUser(updatedRegUser);
      setCurrentUserData(updatedUserData);
      navigate("/todo");
    }
  };
  const toggleCompleted = () => {
    const updatedTodo = currentUserData.todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    const updatedUserData = { ...currentUserData, todos: updatedTodo };
    const updatedRegUser = regUser.map((user) =>
      user.userName === currentUser ? updatedUserData : user
    );
    setRegUser(updatedRegUser);
    setCurrentUserData(updatedUserData);
  };
  const editTitle = () => {
    !titleClicked;
    setTitleClicked(!titleClicked);
  };
  const editDesc = () => {
    setDescriptionClicked(!descriptionClicked);
  };
  const editEst = () => {
    setEstimateClicked(!estimateClicked);
  };
  const editdead = () => {
    setDeatLineClicked(!deadlineClicked);
  };
  const titleEnter = (e) => {
    if (e.key === "Enter") {
      setTitleClicked(!titleClicked);
      const updatedTodo = currentUserData.todos.map((t) =>
        t.id === id ? { ...t, title: newTitle } : t
      );
      const updatedUserData = { ...currentUserData, todos: updatedTodo };
      const updatedRegUser = regUser.map((user) =>
        user.userName === currentUser ? updatedUserData : user
      );
      setRegUser(updatedRegUser);
      setCurrentUserData(updatedUserData);
    }
  };
  const descriptionEnter = (e) => {
    if (e.key === "Enter") {
      setDescriptionClicked(!descriptionClicked);
      const updatedTodo = currentUserData.todos.map((t) =>
        t.id === id ? { ...t, description: newDescription } : t
      );
      const updatedUserData = { ...currentUserData, todos: updatedTodo };
      const updatedRegUser = regUser.map((user) =>
        user.userName === currentUser ? updatedUserData : user
      );
      setRegUser(updatedRegUser);
      setCurrentUserData(updatedUserData);
    }
  };
  const estimateEnter = (e) => {
    if (e.key === "Enter") {
      setEstimateClicked(!estimateClicked);
      const updatedTodo = currentUserData.todos.map((t) =>
        t.id === id ? { ...t, estimation: newEstimate } : t
      );
      const updatedUserData = { ...currentUserData, todos: updatedTodo };
      const updatedRegUser = regUser.map((user) =>
        user.userName === currentUser ? updatedUserData : user
      );
      setRegUser(updatedRegUser);
      setCurrentUserData(updatedUserData);
    }
  };
  const deadEnter = (e) => {
    if (e.key === "Enter") {
      setDeatLineClicked(!deadlineClicked);
      const updatedTodo = currentUserData.todos.map((t) =>
        t.id === id ? { ...t, deadline: newDeadLine } : t
      );
      const updatedUserData = { ...currentUserData, todos: updatedTodo };
      const updatedRegUser = regUser.map((user) =>
        user.userName === currentUser ? updatedUserData : user
      );
      setRegUser(updatedRegUser);
      setCurrentUserData(updatedUserData);
    }
  };
  const categoryChange = (e) => {
    const selectedCategory = e.target.value;
    const updatedTodo = currentUserData.todos.map((t) =>
      t.id === id ? { ...t, category: selectedCategory } : t
    );
    const updatedUserData = { ...currentUserData, todos: updatedTodo };
    const updatedRegUser = regUser.map((user) =>
      user.userName === currentUser ? updatedUserData : user
    );
    setRegUser(updatedRegUser);
    setCurrentUserData(updatedUserData);
  };

  return (
    <div className="greeting-container">
    <section className="edit-section">
      <h2>
        <i>
          <u>Click to edit:</u>
        </i>
      </h2>
      {!titleClicked ? (
        <p onClick={editTitle}>
          Title: {capitalizeFirstLetter(todo.title)}
          <button>
            <FontAwesomeIcon icon={faPen} size="xs" />
          </button>
        </p>
      ) : (
        <label>
          <input
            onKeyDown={titleEnter}
            type="text"
            placeholder="Title"
            onChange={(e) => setNewTitle(e.target.value)}
          ></input>{" "}
          Press enter to save
        </label>
      )}

      {!descriptionClicked ? (
        <p onClick={editDesc}>
          Description: {capitalizeFirstLetter(todo.description)}
          <button>
            <FontAwesomeIcon icon={faPen} size="xs" />
          </button>
        </p>
      ) : (
        <label>
          <input
            onKeyDown={descriptionEnter}
            type="text"
            placeholder="Description"
            onChange={(e) => setNewDescription(e.target.value)}
          ></input>
          Press enter to save
        </label>
      )}

      {!estimateClicked ? (
        <p onClick={editEst}>
          Estemated time: {todo.estimation} minutes{" "}
          <button>
            <FontAwesomeIcon icon={faPen} size="xs" />
          </button>
        </p>
      ) : (
        <label>
          <input
            onKeyDown={estimateEnter}
            type="text"
            placeholder="Estemate minutes"
            onChange={(e) => setNewEstimate(e.target.value)}
          ></input>
          Press enter to save
        </label>
      )}

      {!deadlineClicked ? (
        <p onClick={editdead}>
          Deadline: {todo.deadline}
          <button>
            <FontAwesomeIcon icon={faPen} size="xs" />
          </button>
        </p>
      ) : (
        <label>
          <input
            onKeyDown={deadEnter}
            type="date"
            placeholder="Deadline"
            onChange={(e) => setNewDeadline(e.target.value)}
          ></input>{" "}
          Press enter to save
        </label>
      )}

      <p>
        Status: {`${todo.completed ? "Complete" : "Not complete"}`}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
        ></input>
      </p>
      <p>
        Category: {capitalizeFirstLetter(todo.category)}
        <select name="categoryFilter" onChange={categoryChange}>
          <option value="">Change category</option>
          <option value="health">Health</option>
          <option value="housing">Housing</option>
          <option value="pleasure">Pleasure</option>
          <option value="economy">Economy</option>
          <option value="work">Work</option>
        </select>
      </p>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
      <br />
      <Link to="/todo">Go back på todopage</Link>
    </section>
    </div>
  );
};

export default EditTodo;
