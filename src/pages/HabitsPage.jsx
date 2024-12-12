import { Link } from "react-router-dom"
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"


///startsida för habits 

let HabitsPage = () => {
  let { currentUser } = useContext(LoginContext)
    
  

    return (
        <div>
          <h2>Welcome {currentUser?.userName }</h2>
          <p>Sort todo</p>

          {/* <input type="checkbox" name="title" id="" />
          <input type="checkbox" name="repetition" id="" />
          <input type="checkbox" name="priority" id="" /> */}


            <h3>Your habits are:</h3>
            {currentUser?.habits?.length > 0 ? (
              currentUser.habits.map((h) => (
                <p key={h.id}>
                HABIT: {h.title} PRIORITY: {h.priority} REPETITIONS: {h.repetitions}
                </p>
              ))
            ) :(
              <br />
            )}
              <Link to="/addhabits"><button>Add a new Habit</button></Link>
          
        </div>
      )
}

export default HabitsPage

