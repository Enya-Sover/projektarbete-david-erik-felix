import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import EventCalendar from "./EventCalendar";
import { Link } from "react-router-dom";

const LoggedInPage = ()=>{


    const { currentUser, setCurrentUser } = useContext(LoginContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        setCurrentUser(null);
        navigate("/")
       
    };


    return(<>
    <h1>Welcome User!</h1>
    <Link to="/events">Event Calendar</Link>
    <button onClick={handleLogOut}>Log out</button>
    </>)
}

export default LoggedInPage