import { useState } from "react"
import { Link } from "react-router-dom"


///Lite övningar (ska dela upp det sen ev flyta till ny component)


let AddNewHabits = () => {
    let [habits, setHabit] = useState([])
    let [newHabit, setNewHabit] = useState("")
    let [newPriority, setNewPriority] = useState("")
    let [newRepetition, setNewRepetition] = useState("")

    let addHabit = () => {
        let addNewHabit = {
            habit: newHabit,
            priority: newPriority,
            repetition: newRepetition
        }
        setHabit([...habits, addNewHabit])

        setNewHabit("")
        setNewPriority("")
        setNewRepetition("")
    }

    return(
        <div>
            <h1>Add a new Habit</h1>
            <label>Habit: </label>
            <input type="text" placeholder="..." value={newHabit} onChange={(e) => setNewHabit(e.target.value)}/>
            <br />
            <label>priority: 
            <select name="dropdown" value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                <option value="">......</option>
                <option value="high">High</option>
                <option value="mid">Mid</option>
                <option value="low">Low</option>
            </select>
            </label>
            <br />
            <label>repetition: 
                <input type="text" value={newRepetition} onChange={(e) => setNewRepetition(e.target.value)} />
            </label>
            <button onClick={addHabit}>Add</button>
            {habits.map((habit, i) => (<p key={i}>Habit: {habit.habit} Priority: {habit.priority} Repetition: {habit.repetition}</p>))}
            <br />
            <Link to="/habitsstart">Back to your habits</Link>
            
        </div>
    )
}
export default AddNewHabits