

import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";


let HabitsPage = () => {
  let { currentUser, currentUserData, setCurrentUserData, regUser, setRegUser } = useContext(LoginContext)

  let [filterPrio, setFilterPrio] = useState("")
  let [sortPrio, setSortPrio] = useState("")
  let [sortRep, setSortRep] = useState("")

  let deleteHabit = (id) => {
    if (!currentUser) {
      alert("logga in")
    } else {
      let updatedHabit = currentUserData.habits.filter((habit) => habit.id !== id)
      setCurrentUserData({ ...currentUserData, habits: updatedHabit });

      let updatedRegUser = regUser.map((user) =>
        user.userName === currentUserData.userName ? { ...user, habits: updatedHabit } : user
      )
      setRegUser(updatedRegUser)
    }
  }

  let handleRepetitions = (id, a) => {
    let updatedHabits = currentUserData.habits.map((habit) =>
      habit.id === id
        ? { ...habit, repetitions: a === "increase" ? habit.repetitions + 1 : Math.max(habit.repetitions - 1, 0) }
        : habit
    )

    setCurrentUserData({ ...currentUserData, habits: updatedHabits })

    let updatedRegUser = regUser.map((user) =>
      user.userName === currentUserData.userName ? { ...user, habits: updatedHabits } : user
    )
    setRegUser(updatedRegUser)
  }

  let resetHabit = (id) => {
    let resetHabits = currentUserData.habits.map((habit) =>
      habit.id === id ? { ...habit, repetitions: 0 } : habit
    )

    setCurrentUserData({ ...currentUserData, habits: resetHabits })

    let updatedRegUsers = regUser.map((user) =>
      user.userName === currentUserData.userName ? { ...user, habits: resetHabits } : user
    )
    setRegUser(updatedRegUsers)
  }

  return (
    <div>
      <h3>Filter todo:</h3>
      <div className="filter-and-sort">
        
        <select name="filter" id="priority" value={filterPrio} onChange={(e) => setFilterPrio(e.target.value)}>
          <option value="filterPrio">Filter Priority</option>
          <option value="high">High</option>
          <option value="mid">Mid</option>
          <option value="low">Low</option>
        </select>

        <select value={sortRep} onChange={(e) => setSortRep(e.target.value)}>
          <option value="sortR">Sort Repetitions</option>
          <option value="descendingRep">High to Low</option>
          <option value="ascendingRep">Low to High</option>
        </select>

        <select value={sortPrio} onChange={(e) => setSortPrio(e.target.value)}>
          <option value="sortP">Sort Priority</option>
          <option value="descendingPrio">High to Low</option>
          <option value="ascendingPrio">Low to High</option>
        </select>
      </div>

      
      <h3>Your habits are:</h3>

      <div className="habitList">

        {currentUserData?.habits
          .filter((habit) => {
            if (!filterPrio || filterPrio === "filterPrio") {
              return true
            }
            return habit.priority === filterPrio
          })
          .sort((a, b) => {
            if (sortRep === "ascendingRep") {
              return a.repetitions - b.repetitions
            } else if (sortRep === "descendingRep") {
              return b.repetitions - a.repetitions
            }
            
            let priorityOrder = { high: 3, mid: 2, low: 1 }
            if (sortPrio === "ascendingPrio") {
              return priorityOrder[a.priority] - priorityOrder[b.priority]
            } else if (sortPrio === "descendingPrio") {
              return priorityOrder[b.priority] - priorityOrder[a.priority]
            }
            return 0
          })
          .map((h) => (
            <div className="show-container" key={h.id}>
              <p>Habit: {h.title}</p> <p>Priority: {h.priority}</p> <p>Repetitions: {h.repetitions} times</p>
              <div className="function-btns">
              <button onClick={() => deleteHabit(h.id)}>Delete</button>
              <button onClick={() => handleRepetitions(h.id, "increase")}> + </button>
              <button onClick={() => handleRepetitions(h.id, "decrease")}> - </button>
              <button onClick={() => resetHabit(h.id)}>Reset</button>
              </div>
            </div>
          ))}
      </div>

      <footer className="navigate">
        <Link to="/addhabits">
          <button>Add a new Habit</button>
        </Link>
        <Link to="/loggedin">Back to Home page</Link>
      </footer>
    </div>
  )
}

export default HabitsPage

