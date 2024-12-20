import { Link } from "react-router-dom";
import LogIn from "../components/LogIn";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";



const Home = () => {
    const {currentUser} = useContext(LoginContext)

    return (
        <div className="home-container">
        <LogIn />
        

        <p>Not a user? Click <Link to="/register">here</Link> to register</p>
        </div>)
}

export default Home