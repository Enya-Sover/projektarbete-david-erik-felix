import { useState } from "react";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

let AddTodoItem = ({currentUserData, setCurrentUserData})=>{
    const { currentUser, regUser, setRegUser } = useContext(LoginContext);
   
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
          id: currentUserData.todos.length + 1,
          title,
          description,
          estimation: parseInt(estimation),
          completed: false,
          category,
          deadline: parseInt(deadline),
        };
    
        const duplicate = (currentUserData.todos.some(info => info.title.toLowerCase() === title.toLowerCase()));
    
        if (duplicate) {
          setError("Titeln finns redan");
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
    
          // window.location.reload();
        }
      };
    return(<>
    
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
      <p id="errorMessage">{error}</p>
    </>)
}

export default AddTodoItem