import { CitatContext } from "../context/CitatContext";
import { useContext, React } from "react";
import { LoginContext } from "../context/LoginContext";

import { Link, useNavigate } from "react-router-dom";

const LoggedInPage = () => {
  let { greetings } = useContext(CitatContext);
  const {
    currentUser,
    setCurrentUser,
    currentUserData,
    capitalizeFirstLetter,
  } = useContext(LoginContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    setCurrentUser(null);
    navigate("/");
  };

  const today = new Date()

  const threeTodos = currentUserData.todos.slice(-3).map((todo) => todo);
  const threeEvents = currentUserData.events.sort((a, b) => new Date(b.start) - new Date(a.start)).slice(-3)
  const threeHabits = currentUserData.habits.sort((a, b) => b.repetitions - a.repetitions).slice(-3)
  return (
    <>
      <header>
        <h1>Welome {capitalizeFirstLetter(currentUser)}</h1>
      </header>
      <p>"{greetings}"</p>

      <h2>Your 3 latest added todos:</h2>

      <ul>
        {threeTodos.map((todo) => {
          return (
              <li key ={todo.title}>
                <b>Title:</b> {capitalizeFirstLetter(todo.title)}
              </li>
          );
        })}
      </ul>
      <p>
        Click<Link to="/todo"> here </Link>to se all todos
      </p>

      <h2>3 Habits with most repetitions:</h2>
      <ul>
        {threeHabits.length > 0 ? (
          threeHabits.map((habit, i) =>
            habit.title !== '' ? <li key={i}> Title: {capitalizeFirstLetter(habit.title)}. Repetitions: {habit.repetitions} </li> 
          : <p key = {i}>No habits available</p>
          )) : 
          <p>No habits available</p>}
      </ul>
      <p>Click<Link to="/habits"> here </Link>to se all habits
      </p>

      <h2>3 Upcoming events:</h2>
      <ul>
        {threeEvents.length > 0 ? (
          threeEvents.map((event, i) =>
            event.title !== '' ? <li key={i}> Name: {capitalizeFirstLetter(event.name)}. </li> 
          : <p key = {i}>No events available</p>
          )) : 
          <p>No events available</p>}
      </ul>
      <p>Click<Link to="/events"> here </Link>to se all habits
      </p>

      <button onClick={handleLogOut}>Log out</button>

      <footer>
        <p>Links:</p>

        <ul>
          <li>
            {" "}
            <Link to="/todo">Go to todo page</Link>
          </li>
          <li>
            {" "}
            <Link to="/events">Event Calendar</Link>
          </li>
        </ul>
      </footer>
      <button><Link to="/habits">Habits</Link></button>
      
    </>
  );
};

export default LoggedInPage;
