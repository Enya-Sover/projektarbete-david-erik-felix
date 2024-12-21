import { useContext, useState } from "react"
import { LoginContext } from "../context/LoginContext"
import { Link, useNavigate } from "react-router-dom"

const RegisterPage = ()=>{

    const {setRegUser, regUser} = useContext(LoginContext)
    const navigate = useNavigate()

    let [newUserName, setNewUserName] = useState('')
    let [newPassword, setNewPassword] = useState('')

    let addUser = (userName, password) => {
        let newUser = {
          userName: userName,
          password: password,
          todos: [
            {
              id: null, 
              title: '',
              description: '',
              estimation: 0,
              completed: false,
              category: '',
              deadline: '',
            },
          ],
          habits: [
            {
              id: null,
              title: '',
              repetitions: 0,
              priority: '',
            },
          ],
          events: [
            {
              id: null,
              name: '',
              start: '',
              end: '',
            },
          ],
        };
        setRegUser([...regUser, newUser]); 
        navigate('/')
      };

    return (<div className="reg-page-container">
    <h1>Welcome to the register page</h1>
<label htmlFor="">Username: <br />
    <input type="text" placeholder="Username" onChange={(e)=> setNewUserName(e.target.value)}/>

</label>
<label htmlFor=""> Password: <br />
    <input type="password" placeholder="Password" onChange={(e)=> setNewPassword(e.target.value)}/>
</label>
    <button onClick={()=> addUser(newUserName, newPassword)}>Submit</button>
    <br />
    <Link to='/'>Go to homepage</Link>

    </div>)
}

export default RegisterPage