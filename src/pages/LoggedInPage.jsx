import { useContext } from "react"
import { CitatContext } from "../context/CitatContext"

const LoggedInPage = ()=>{
    let { greetings } = useContext(CitatContext)
    return(<>
    <h1>Welcome User!</h1>
    <p>"{greetings.content}" API error </p>
    
    </>)
}

export default LoggedInPage