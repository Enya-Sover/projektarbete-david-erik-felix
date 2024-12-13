import { useContext} from "react";
import { LoginContext } from "../context/LoginContext";
import { Link, useParams } from "react-router-dom";


const TodoItem = ({ todo, index, }) => {

    const{id} = useParams()

  const { currentUser, regUser, setRegUser, setCurrentUserData, currentUserData, capitalizeFirstLetter } = useContext(LoginContext);
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

  

  return (
    <div key={index}>
     <Link to={`/todo/${todo.id}`}> <h3>Title: {capitalizeFirstLetter(todo.title)}</h3></Link>
        <p>Category: {capitalizeFirstLetter(todo.category)}</p>
      <p>
        Status: {`${todo.completed ? "Complete" : "Not complete"}`}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
        ></input>
      </p>
      
    </div>
  );
};

export default TodoItem;
