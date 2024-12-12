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
            console.warn("Inte inloggad")
        
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
                <input type="text" value={newRepetition} onChange={(e) => setNewRepetition(e.target.value)} />
            </label>
            <br />
            <button onClick={addHabit}>Add</button>
            
            <h2>Your Habits</h2>
            {currentUser?.habits?.map((h) => (
                <p key={h.id}>
                    Habit: {h.title} | Priority: {h.priority} | Repetitions: {h.repetitions}
                </p>
            ))}
            
            <br />
            <Link to="/habitsstart">Back to your habits</Link>
            
        </div>
    )
}
export default AddNewHabits

