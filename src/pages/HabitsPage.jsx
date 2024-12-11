import { Link } from "react-router-dom"
import AddNewHabitsPage from "../components/AddNewHabits"
import { LoginContext } from "../context/LoginContext"
import { useContext } from "react"


///startsida för habits 

let HabitsPage = () => {
    let {regUser, currentUser} = useContext(LoginContext)
    
    
    return(
        <div>
            <h1>Habit Start</h1>
            <h3>Navigare:</h3>
            <Link to="/addhabits">
        
            <button>Add a new Habit</button>
            </Link>

        </div>
    )
}

export default HabitsPage