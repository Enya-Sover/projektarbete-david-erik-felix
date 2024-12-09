
import { useState } from "react"
import TodoItem from "../components/TodoItem"
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"

const TodoPage = ()=>{
    const {currentUser, regUser} = useContext(LoginContext)
    const [todos, setTodos] = useState([])

    //Skapa funktion som loopar igenom regUser efter currentUser och skicka props till TodoItem med det objektet
    //Skapa inputs och button för att kunna lägga till Todos och rendera ut dem under
    //uppdatera sidan när man trycker på knappen så försvinner all text i inputs
    
    return(<>

    <input type="text" placeholder="Titel"/>
    <input type="text" placeholder="Beskrivning"/>
    <input type="text" placeholder="Tidsestimat i minuter"/>
    <input type="text" placeholder="Kategori"/>
    <input type="text" placeholder="Deadline"/>
    <button>Lägg till todo</button>

    {currentUser && todos.map((todo, index) => <TodoItem todo={todo} index = {index}/>)}
    <TodoItem/>
    </>)
}

export default TodoPage