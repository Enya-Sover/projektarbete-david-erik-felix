import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import EventList from "../components/EventList";
import NewEvent from "../components/newEvent";
import { Link } from "react-router-dom";

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
      <EventList title="Upcoming Events" events={sortUpcomingEvents} />
      <EventList title="Past Events" events={sortPastEvents} />
      <Link to="/loggedin">Back</Link>
    </div>
  );
};

export default EventCalendar;
