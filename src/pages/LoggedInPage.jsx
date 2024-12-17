import { CitatContext } from "../context/CitatContext";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
      <Link to="/events">Event Calendar</Link>
      <button onClick={handleLogOut}>Log out</button>
      <Link to='/todo'>Go to todo page</Link>
    </>
  );
};

export default LoggedInPage;
   
