import { useContext, useState } from "react"
import { LoginContext } from "../context/LoginContext"
import { Link } from "react-router-dom"

const RegisterPage = ()=>{

    const {addUser} = useContext(LoginContext)

    let [newUserName, setNewUserName] = useState('')
    let [newPassword, setNewPassword] = useState('')

    return (<>
    <h1>Welcome to the register page</h1>

    <input type="text" placeholder="Username" onChange={(e)=> setNewUserName(e.target.value)}/>
    <input type="password" placeholder="Password" onChange={(e)=> setNewPassword(e.target.value)}/>
    <button onClick={()=> addUser(newUserName, newPassword)}>Submit</button>
    <br />
    <Link to='/'>Go to homepage</Link>

    </>)
}

export default RegisterPage