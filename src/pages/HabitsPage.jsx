import { Link } from "react-router-dom"
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"


///startsida för habits 

let HabitsPage = () => {
  let { currentUser, setCurrentUser } = useContext(LoginContext)
    
  let deleteHabit = (id) => {
    if (!currentUser) {
      alert("logga in")
    } else {
      let updatedHabit = currentUser.habits.filter((habits) => habits.id !== id)
  
    setCurrentUser({ ...currentUser, habits: updatedHabit })
    }
  }

    let handleRepetitions = (id, a) => {
      let handleHabits = currentUser.habits.map((habit) => habit.id === id ?
    { ...habit, repetitions: a === "increase" ? habit.repetitions + 1 : Math.max(habit.repetitions -1, 0)} : habit)
  
    setCurrentUser({ ...currentUser, habits: handleHabits})
    }
    
  
  
    return (
        <div>
          <h2>Welcome {currentUser?.userName }</h2>
          <p>Sort todo</p>


            <h3>Your habits are:</h3>
            {currentUser?.habits? (
              currentUser.habits.map((h) => (
                <div className="habitBorder">
                <p key={h.id}>
                <p>HABIT: {h.title}</p> <p>PRIORITY: {h.priority} </p> <p> REPETITIONS: {h.repetitions}</p>
                <button onClick={() => deleteHabit(h.id)}>Delete</button>
                <button onClick={() => handleRepetitions(h.id, "increase")}> + </button>    
                <button onClick={() => handleRepetitions(h.id, "decrease")}> - </button>            
                </p>
                </div>
              ))
            ) :(
              <br />
            )}
              <footer className="navigate">
              <Link to="/addhabits"><button>Add a new Habit</button></Link>
              <Link to="/edithabit" > <button>Edit habit</button></Link>
              </footer>
        </div>
      )
}

export default HabitsPage


          {/* <input type="checkbox" name="title" id="" />
          <input type="checkbox" name="repetition" id="" />
          <input type="checkbox" name="priority" id="" /> */}


