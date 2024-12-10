import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { regUser, setCurrentUser } = useContext(LoginContext);
  const navigate = useNavigate();
  

  //Här är en funktion för att kolla om anvnamn och lösenord är korrekt så man kan logga in
  let checkLogin = (char, pass) => {
    const requestUser = regUser.find(
      (user) => user.userName === char && user.password === pass
    );
    if (requestUser) {
      setCurrentUser(char);
      navigate("/login");
    }
  };
  return (
    <div className="log-in-container">
      <h2>Log in</h2>
      <label htmlFor="username">Username: </label>
      <input type="text" placeholder="Username" />
      <br />
      <label htmlFor="password">Password: </label>
      <input type="password" placeholder="Password" />
      <br />
      <button>Log in</button>
    </div>
  );
};

export default LogIn;
