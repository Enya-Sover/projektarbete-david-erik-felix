import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import EventList from "../components/EventList";



const EventCalendar = () => {
  const { regUser, currentUser } = useContext(LoginContext);
  const user = currentUser
    ? regUser.find((u) => u.userName === currentUser)
    : null;

  if (!user) {
    return <p>Please log in to see your calendar.</p>;
  }

  const userEvents = user ? user.events : [];

  const now = new Date();
  const upcomingEvents = userEvents.filter((event) => new Date(event.start) > now);
  const pastEvents = userEvents.filter((event) => new Date(event.start) <= now);

  const sortUpcomingEvents = upcomingEvents.sort(
    (a, b) => new Date(a.start) - new Date(b.start)
  );
  const sortPastEvents = pastEvents.sort(
    (a, b) => new Date(b.start) - new Date(a.start)
  );

  return (
    <div>
      <h2>Event Calendar</h2>
      <EventList title="Upcoming Events" events={upcomingEvents} />
      <EventList title="Past Events" events={pastEvents} />
    </div>
  );
};

export default EventCalendar;
