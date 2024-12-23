import { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  let { regUser, setCurrentUser } = useContext(LoginContext);
  const navigate = useNavigate();

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  let checkLogin = (char, pass) => {
    const requestUser = regUser.find(
      (user) => user.userName === char && user.password === pass
    );
    if (requestUser) {
      setCurrentUser(requestUser.userName);
      localStorage.setItem("currentUser", JSON.stringify(requestUser.userName));
      navigate("/loggedin");
      setIsUserLoggedIn(true);
      window.location.reload();
    } else {
      setError("Wrong input!");
    }
  };

  return (
    <div className="log-in-container">
      <h2>Log in</h2>
      <div className="input-login-container">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          placeholder="Username.."
          onChange={(e) => setLoginUsername(e.target.value)}
        />
      
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="Password.."
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        
      </div>
      <button onClick={() => checkLogin(loginUsername, loginPassword)}>
        Log in
      </button>
      <p>{error}</p>
    </div>
  );
};

export default LogIn;
