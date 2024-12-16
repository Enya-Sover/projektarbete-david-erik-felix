import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import { LoginContext } from "../context/LoginContext"


///startsida för habits + edditHabits 

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
    
    let resetHabit = (id) => {
      let resetHabits = currentUser.habits.map((habit) => habit.id === id ? { ...habit, repetitions: 0 } :habit)

      setCurrentUser({ ...currentUser, habits: resetHabits})
    }
    
    
    
    
    return (
        <div>
          <h2>Welcome {currentUser?.userName }</h2>
          <div className="filterPriority">
          <h3>Fliter todo:</h3>
          <select name="filter" id="priority">
            <option value="filterPrio">Filter Priority</option>
            <option value="high">High</option>
            <option value="mid">Mid</option>
            <option value="low">Low</option>
            </select>

          </div>
         
          <div className="sortRepetitions">   
          <select name="" id="">
            <option value="sortRep">Sort Repetitions</option>
            <option value="descendingRep">High to Low</option>
            <option value="ascendingRep">Low to High</option>
          </select>
          </div>
          
          <div className="sortPriority">
          <select name="" id="">
            <option value="sortPrio">Sort Priority</option>
            <option value="descendingPrio">High to Low</option>
            <option value="ascendingPrio">Low to High</option>
          </select>
          </div>


            <h3>Your habits are:</h3>
            {currentUser?.habits? (
              currentUser.habits.map((h) => (
                <div className="habitBorder" key={h.id}> 
                <p>
                <p>HABIT: {h.title}</p> <p>PRIORITY: {h.priority} </p> <p> REPETITIONS: {h.repetitions}</p>
                <button onClick={() => deleteHabit(h.id)}>Delete</button>
                <button onClick={() => handleRepetitions(h.id, "increase")}> + </button>    
                <button onClick={() => handleRepetitions(h.id, "decrease")}> - </button>       
                <button onClick={() => resetHabit(h.id)}>Reset</button>     
                </p>
                </div>
              ))
            ) :(
              <br />
            )}
              <footer className="navigate">
              <Link to="/addhabits"><button>Add a new Habit</button></Link>
              </footer>
        </div>
      )
}

export default HabitsPage



