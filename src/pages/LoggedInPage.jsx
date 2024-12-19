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

  const threeTodos = currentUserData.todos.filter(todo => todo.title !== '' && !todo.completed).reverse().slice(0,3).map((todo) => todo);
  const threeHabits = currentUserData.habits.reverse().sort((a, b) => b.repetitions - a.repetitions).slice(0, 3)
  const threeEvents = currentUserData.events.filter(event=> new Date(event.start) > today && event.id).sort((a, b) => new Date(a.start) - new Date(b.start) ).slice(-3)

  return (
    <>
      <header className="header">
        <img src="./src/assets/Logo.jpg" alt="logo" className="logo-container"/>
        <nav>
        <Link to="/loggedin">Start</Link>
        <Link to="/todo">Todos</Link>
        <Link to="/habits">Habits</Link>
        <Link to="/events">Events</Link>
      </nav>
      <div className="btn-container">
      <button onClick={handleLogOut}>Log out</button>
      </div>
      </header>
      <div className="greeting-container">
      <h2>Welcome {capitalizeFirstLetter(currentUser)}</h2>
      <p className="quote">Quote of the day: {greetings ? greetings : 'Gandi has spoken'}</p>
      </div>
      <main>
        
        <div className="todo-container">
      <h2>Your 3 latest added todos:</h2>

      <ul>
        {threeTodos.length > 0 ? threeTodos.map((todo) => {
          return (
              <li key ={todo.title}>
                <b>Title:</b> {capitalizeFirstLetter(todo.title)}
              </li>
          );
        }) : <p>No todos available</p>}
      </ul>
      <p>
        See<Link to="/todo"> all </Link>todos
      </p>
      </div>

      <div className="habits-container">
      <h2>3 Habits with most repetitions:</h2>
      <ul>
        {threeHabits.length > 0 ? (
          threeHabits.map((habit, i) =>
            habit.title !== '' ? <li key={i}> Title: {capitalizeFirstLetter(habit.title)}. Repetitions: {habit.repetitions} </li> 
          : <p key = {i}>No habits available</p>
          )) : 
          <p>No habits available</p>}
      </ul>
      <p>See<Link to="/habits"> all </Link>habits
      </p>
      </div>

      <div className="events-container">
      <h2>3 Upcoming events:</h2>
      <ul>
        {threeEvents.length > 0 ? (
          threeEvents.map((event, i) =>
            event.title !== '' ? <li key={i}>{capitalizeFirstLetter(event.name)} </li> 
          : <p key = {i}>No events available</p>
          )) : 
          <p>No events available</p>}
      </ul>
      <p>See<Link to="/events"> all </Link>events
      </p>
      </div>

      </main>
      

      <footer className="footer">
       <h5>All rights reserved - Copyright 1994</h5>
      </footer>
      
      
    </>
  );
};

export default LoggedInPage;
