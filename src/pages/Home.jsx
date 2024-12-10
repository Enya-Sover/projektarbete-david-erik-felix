import { Link } from "react-router-dom";
import LogIn from "../components/LogIn";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";



const Home = () => {
    const {currentUser} = useContext(LoginContext)

    return (<>
        <h2>Home</h2>
        <LogIn />

        <p>Not a user? Click <Link to="/register">here</Link> to register</p>
        </>)
}

export default Home