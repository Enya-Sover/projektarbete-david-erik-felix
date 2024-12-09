
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"

const TodoItem = ({todo, index})=>{

    return(<>
    <h2>Titel</h2>
    <p>Beskrivning</p>
    <p>Completed?</p>
    <p>Tidsestimat</p>
    <p>Kategori</p>
    <p>Deadline</p>


    </>)
}

export default TodoItem