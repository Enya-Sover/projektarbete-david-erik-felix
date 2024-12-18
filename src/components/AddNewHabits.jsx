import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"

///Lägg till en ny habit


let AddNewHabits = () => {
    let { currentUser, setCurrentUser, regUser, setRegUser } = useContext(LoginContext)

    let [newHabit, setNewHabit] = useState("")
    let [newPriority, setNewPriority] = useState("")
    let [newRepetition, setNewRepetition] = useState("")

    

    let addHabit = () => {
        if (!currentUser) {
            alert("Inte inloggad, skapa nytt eller logga in")    
        }

        let newHabitObject = {
            id: Date.now(),
            title: newHabit,
            priority: newPriority,
            repetitions: parseInt(newRepetition) || 10,

        }

        let updatedCurrentUser = {
            ...currentUser,
            habits: [...currentUser.habits, newHabitObject]
        }

        let updatedRegUser = regUser.map((user) => user.userName === currentUser.userName ? updatedCurrentUser: user)
        
        setCurrentUser(updatedCurrentUser)
        setRegUser(updatedRegUser)
        
        setNewHabit("")
        setNewPriority("")
        setNewRepetition("")
    }

    return(
        <div>
            <h1>Add a new Habit</h1>
            <label>Habit: </label>
            <input type="text" placeholder="..." value={newHabit} onChange={(e) => setNewHabit(e.target.value)}/>
            
            <label>priority: 
            <select name="dropdown" value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                <option value="">......</option>
                <option value="high">High</option>
                <option value="mid">Mid</option>
                <option value="low">Low</option>
            </select>
            </label>
            
            <label>repetition: 
                <input type="number" value={newRepetition} placeholder="1" min="1" onChange={(e) => setNewRepetition(e.target.value)} />
            </label>
            <br />
            <button onClick={addHabit}>Add</button>
            
            <h2>Your Habits</h2>
            {currentUser?.habits?.map((h) => (
                <div className="borderNewHabit">
                <p key={h.id}>
                    Habit: {h.title} | Priority: {h.priority} | Repetitions: {h.repetitions} ggr
                </p>
                </div>
            ))}
            <footer className="Nav">
            <br />
            <Link to="/habits">Back to your habits</Link>
            <br />
            <Link to="/">Logga in</Link>
            </footer>
        </div>
    )
}
export default AddNewHabits

