import { CitatContext } from "../context/CitatContext";
import { useContext, React } from "react";
import { LoginContext } from "../context/LoginContext";

import { Link, useNavigate } from "react-router-dom";

const LoggedInPage = () => {
  let { greetings, greetings2 } = useContext(CitatContext);
  const {
    currentUser,
    setCurrentUser,
    currentUserData,
    capitalizeFirstLetter,
  } = useContext(LoginContext);
  const navigate = useNavigate();

  const today = new Date();

  const threeTodos = currentUserData.todos
    .filter((todo) => todo.title !== "" && !todo.completed)
    .reverse()
    .slice(0, 3)
    .map((todo) => todo);
  const threeHabits = currentUserData.habits
    .filter((habit) => habit.title !== "")
    .reverse()
    .sort((a, b) => b.repetitions - a.repetitions)
    .slice(0, 3);
  const threeEvents = currentUserData.events
    .filter((event) => new Date(event.start) > today && event.id)
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .slice(-3); 

  return (
    <>
      <div className="greeting-container">
        <h2>Welcome {capitalizeFirstLetter(currentUser)}</h2>
        <p className="quote">
          <b>Quote of the day:</b> {greetings ? greetings : greetings2 ? greetings2 :"Gandhi has spoken"}
        </p>
      </div>
      <main>
        <div className="todo-container">
          <h2>Your 3 latest added todos:</h2>

          <ul>
            {threeTodos.length > 0 ? (
              threeTodos.map((todo) => {
                return (
                  <li key={todo.title}>
                    <b>Title:</b> {capitalizeFirstLetter(todo.title)}
                  </li>
                );
              })
            ) : (
              <p>No todos available</p>
            )}
          </ul>
          <p>
            <Link className="link-style" to="/todo">See all todos</Link>
          </p>
        </div>

        <div className="habits-container">
          <h2>3 Habits with most repetitions:</h2>
          <ul>
            {threeHabits.length > 0 ? (
              threeHabits.map(
                (habit, i) =>
                  habit.title !== '' && (
                    <li key={i}>
                      Title: {capitalizeFirstLetter(habit.title)}. Repetitions:{" "}
                      {habit.repetitions}
                    </li>
                  ))) : (<p>No habits available</p>
                  )}
          </ul>

          <p>
            <Link to="/habits">See all habits </Link>
          </p>
        </div>

        <div className="events-container">
          <h2>3 Upcoming events:</h2>
          <ul>
            {threeEvents.length > 0 ? (
              threeEvents.map((event, i) =>
                event.title !== "" ? (
                  <li key={i}>{capitalizeFirstLetter(event.name)} </li>
                ) : (
                  <p key={i}>No events available</p>
                )
              )
            ) : (
              <p>No events available</p>
            )}
          </ul>
          <p>
            <Link to="/events">See all events</Link>
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
