import { Link } from "react-router-dom"
import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"


///startsida för habits 

let HabitsPage = () => {
    

    return (
        <div>
          <h2>Welcome</h2>
            <>
              <Link to="/addhabits">
                <button>Add a new Habit</button>
              </Link>
            </>
        </div>
      );
}

export default HabitsPage

