import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"


let AddNewHabits = () => {
    let { regUser, setRegUser, currentUserData, setCurrentUserData, currentUser} = useContext(LoginContext)

    let [newHabit, setNewHabit] = useState("")
    let [newPriority, setNewPriority] = useState("")
    let [newRepetition, setNewRepetition] = useState("")


    let addHabit = () => {
        if (!currentUser) {
            alert("Not loged in. Please log in!")    
        }

        let newHabitObject = {
            id: Date.now(),
            title: newHabit,
            priority: newPriority,
            repetitions: parseInt(newRepetition) || 10,

        }

        let updatedCurrentUser = {
            ...currentUserData,
            habits: [...currentUserData.habits, newHabitObject]
        }

        let updatedRegUser = regUser.map((user) => user.userName === currentUserData.userName ? updatedCurrentUser: user)
        setRegUser(updatedRegUser)
        setCurrentUserData(updatedCurrentUser)
    }

    return(
        <div className="main-container">
            <h1>Add a new Habit</h1>
            <div className="input-habit">
            <input type="text" placeholder="Habit" value={newHabit} onChange={(e) => setNewHabit(e.target.value)}/>
                 
            <select name="dropdown" value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                <option value="">Priority</option>
                <option value="high">High</option>
                <option value="mid">Mid</option>
                <option value="low">Low</option>
            </select>
            
                <input type="number" value={newRepetition} placeholder="Number of Repetitions" min="1" onChange={(e) => setNewRepetition(e.target.value)} />
                </div>
            <div className="add-btn">
            <button  onClick={addHabit}>Add</button>
            </div>
            <h2>Your Habits:</h2>
            <div className="show-add">
            {currentUserData?.habits?.map((h) => (
                <div className="add-habit-container" key={h.id }>
                <p className="add-habit-data" key={h.id}>
                  <b>{h.title} </b> <br/> <b>Priority:</b> {h.priority} <br/> <b>Repetitions: </b>{h.repetitions} times  
                </p>
                </div>            
            ))}
            </div>
            <footer>
            <Link to="/habits">Back to your habits</Link>
            </footer>
        </div>
    )
}
export default AddNewHabits

