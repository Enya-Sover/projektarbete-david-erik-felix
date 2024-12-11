import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  let { regUser, setCurrentUser } = useContext(LoginContext);
  const navigate = useNavigate();
  let { isUserLoggedIn, setIsUserLoggedIn } = useState(false);
  
  const [error, setError] = useState(""); // state för felmeddelande

  // States för inloggningsuppgifterna
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //Här är en funktion för att kolla om anvnamn och lösenord är korrekt så man kan logga in
  let checkLogin = (char, pass) => {
    const requestUser = regUser.find(
      (user) => user.userName === char && user.password === pass
    );
    if (requestUser) {
      setCurrentUser(char);
      navigate("/loggedin");
      setIsUserLoggedIn(true);
    } else {
      setError("Wrong input!");
    }
  };

  return (
    <div className="log-in-container">
      <h2>Log in</h2>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setLoginUsername(e.target.value)}
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
      <br />
      <button onClick={() => checkLogin(loginUsername, loginPassword)}>Log in</button>
      <p>{error}</p>
    </div>
  );
};

export default LogIn;
