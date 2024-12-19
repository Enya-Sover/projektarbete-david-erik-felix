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
        <div>
            <h1>Add a new Habit</h1>
            <label>Habit: </label>
            <input type="text" placeholder="..." value={newHabit} onChange={(e) => setNewHabit(e.target.value)}/>
            
            <label>Priority: 
            <select name="dropdown" value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                <option value="">......</option>
                <option value="high">High</option>
                <option value="mid">Mid</option>
                <option value="low">Low</option>
            </select>
            </label>
            
            <label>Repetition: 
                <input type="number" value={newRepetition} placeholder="1" min="1" onChange={(e) => setNewRepetition(e.target.value)} />
            </label>
            <br />
            <button onClick={addHabit}>Add</button>
            
            <h2>Your Habits</h2>
            {currentUserData?.habits?.map((h) => (
                <div className="borderNewHabit">
                <p key={h.id}>
                  <p> Habit: {h.title} </p> <p>  Priority: {h.priority} </p> <p> Repetitions: {h.repetitions} times </p> 
                </p>
                </div>
            ))}
            <footer className="Nav">
            <br />
            <Link to="/habits">Back to your habits</Link>
            <br />
            <Link to="/">Logga in</Link>
            <br />
            <Link to="/loggedin">Back to Home page</Link>
            </footer>
        </div>
    )
}
export default AddNewHabits

