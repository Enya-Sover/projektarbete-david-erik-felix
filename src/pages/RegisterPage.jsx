import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"

const RegisterPage = ()=>{

    const {tillfälligt, rumpa} = useContext(LoginContext)

    return (<>
    <h1>Welcome to the register page</h1>

    <input type="text" placeholder="Username"/>
    <input type="text" placeholder="Password"/>
    <button>Submit</button>
    <p>{tillfälligt}</p>
    <p>{rumpa}</p>
    </>)
}

export default RegisterPage