import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const LogIn = () => {

    return (
    <div className="log-in-container">  
        <h2>Log in</h2>
    <label htmlFor="username">Username: </label>
        <input type="text" placeholder="Username" />
    <br/>
        <label htmlFor="password">Password: </label>
        <input type="password" placeholder="Password" />
    <br/>
            <button>Log in</button>
    </div>
    )
}

export default LogIn