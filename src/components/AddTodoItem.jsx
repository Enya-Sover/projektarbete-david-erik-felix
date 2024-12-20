import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { v4 as uuidv4 } from "uuid";

let AddTodoItem = ()=>{
    const { currentUser, regUser, setRegUser, setCurrentUserData, currentUserData } = useContext(LoginContext);
   
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [estimation, setEstimation] = useState(0);
    const [category, setCategory] = useState("");
    const [deadline, setDeadline] = useState(0);

    const [error, setError] = useState("");

    let addTodo = () => {
        if (!currentUser) {
          alert("You do not seem to be logged in.");
        }
    
        const newTodo = {
          id: uuidv4(),
          title,
          description,
          estimation: parseInt(estimation),
          completed: false,
          category,
          deadline: new Date(deadline),
        };
    
        const duplicate = (currentUserData.todos.some(info => info.title.toLowerCase() === title.toLowerCase()));
    
        if (duplicate) {
          setError("Todo title already exists. Please choose another title!");
          setTimeout(() => {
            setError("");
          }, 2000);
        } 
    
        else {
          const updatedUserData = {
            ...currentUserData,
            todos: [...currentUserData?.todos, newTodo],
          };

          const updatedRegUser = regUser.map((user) =>
            user.userName === currentUser ? updatedUserData : user
          );
          setRegUser(updatedRegUser);
          setCurrentUserData(updatedUserData);

    
          window.location.reload();
        }
      };
    return(
      <div className="addTodo">
      <span>Create todo:</span>
    <select name="kategori" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose category</option>
        <option value="health">Health</option>
        <option value="housing">Housing</option>
        <option value="pleasure">Pleasure</option>
        <option value="economy">Economy</option>
        <option value="work">Work</option>
    </select>
    
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Estimation in minutes"
        onChange={(e) => setEstimation(e.target.value)}
      />
     
      <input
        type="date"
        placeholder="Deadline"
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button onClick={addTodo}>Add todo</button>
      <p id="errorMessage">{error}</p>
    </div>)
}

export default AddTodoItem