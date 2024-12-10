
import { useState } from "react"
import TodoItem from "../components/TodoItem"
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"

const TodoPage = ()=>{
    const {currentUser, regUser, setRegUser} = useContext(LoginContext)
    const [todos, setTodos] = useState([])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [timeEstemate, setTimeEstimate] = useState(0)
    const [category, setCategory] = useState('')
    const [deadline, setDeadline] = useState(0)

    //Skapa funktion som loopar igenom regUser efter currentUser och skicka props till TodoItem med det objektet
    //Skapa funktionalitet i inputs och button för att kunna lägga till Todos och rendera ut dem under
    //uppdatera sidan när man trycker på knappen så försvinner all text i inputs

    let addTodo = ()=>{


        const user = regUser.find((user) => user.userName === currentUser )
        const newTodo = {
            id: todos.length +1,
            title: title,
            description: description,
            estimation: timeEstemate,
            completed: false,
            category: category,
            deadline: deadline
        }
        console.log(user)
        if (user){
            regUser.todos.push(newTodo)

            
        } else{
            console.log('user not found')
        }
        // window.location.reload()
    }
    return(<>

    <input type="text" placeholder="Titel" onChange={(e)=> setTitle(e.target.value)}/>
    <input type="text" placeholder="Beskrivning" onChange={(e)=> setDescription(e.target.value)}/>
    <input type="text" placeholder="Tidsestimat i minuter" onChange={(e)=> setTimeEstimate(e.target.value)}/>
    <input type="text" placeholder="Kategori" onChange={(e)=> setCategory(e.target.value)}/>
    <input type="text" placeholder="Deadline" onChange={(e)=> setDeadline(e.target.value)}/>
    <button onClick={addTodo}>Lägg till todo</button>

    {currentUser && todos.map((todo, index) => <TodoItem todo={todo} index = {index}/>)}
    <TodoItem/>
    </>)
}

export default TodoPage