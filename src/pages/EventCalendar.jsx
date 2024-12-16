import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import NewEvent from "../components/newEvent";
import { Link } from "react-router-dom";
import FutureEvent from "../components/FutureEvent";
import PastEvents from "../components/PastEvents";

const EventCalendar = () => {
  const {
    regUser,
    setRegUser,
    currentUser,
    setCurrentUserData,
    currentUserData,
  } = useContext(LoginContext);

  if (!currentUserData) {
    window.location.reload();
    return <p>Please log in to see your calendar.</p>;
  }

  // variabler och funktioner för händelser
  const now = new Date();

  const sortUpcomingEvents = currentUserData?.events
    ?.filter((event) => new Date(event.start) > now)
    .sort((a, b) => new Date(a.start) - new Date(b.start));

  const sortPastEvents = currentUserData?.events
    ?.filter((event) => new Date(event.start) <= now)
    .sort((a, b) => new Date(b.start) - new Date(a.start));

  return (
    <div>
      <h2>Event Calendar</h2>
      <NewEvent />
      <ul>
        Past events
    {sortPastEvents.map(event => <PastEvents title="Upcoming Events" event={event} />)}
    Future events
    {sortUpcomingEvents.map(event => <FutureEvent title="Upcoming Events" event={event} />)}
    </ul>
      <Link to="/loggedin">Back</Link>
    </div>
  );
};

export default EventCalendar;
