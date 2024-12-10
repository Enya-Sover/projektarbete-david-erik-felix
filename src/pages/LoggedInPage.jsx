import { CitatContext } from "../context/CitatContext";
import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const LoggedInPage = () => {
  let { greetings } = useContext(CitatContext);
  const { currentUser, setCurrentUser } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setCurrentUser(null);
    navigate("/");
  };

  return (
    <>
      <p>"{greetings.content}" API error </p>
      <button onClick={handleLogOut}>Log out</button>
    </>
  );
};

export default LoggedInPage;
