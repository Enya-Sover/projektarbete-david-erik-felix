import { Link } from "react-router-dom";
import React from "react";
import LogIn from "../components/LogIn";

const Home = () => {

    return (<>
        <h2>Home</h2>
        <LogIn />

        <p>Not a user? Click <Link to="/register">here</Link> to register</p>
        </>)
}

export default Home