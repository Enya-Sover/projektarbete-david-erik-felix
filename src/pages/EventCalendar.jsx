import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import EventList from "../components/EventList";

const EventCalendar = () => {
  const { regUser, currentUser } = useContext(LoginContext);

  // Kontrollerar om currentUser existerar och använd userName för att hitta rätt användare
  const user = currentUser
    ? regUser.find((u) => u.userName === currentUser.userName) 
    : null;

 
  if (!user) {
    return <p>Please log in to see your calendar.</p>;
  }


  // variabler och funktioner för händelser
  const userEvents = user ? user.events : [];
  const now = new Date();
  const upcomingEvents = userEvents.filter((event) => new Date(event.start) > now);
  const pastEvents = userEvents.filter((event) => new Date(event.start) <= now);


  // funktioner för att sortera events
  const sortUpcomingEvents = upcomingEvents.sort(
    (a, b) => new Date(a.start) - new Date(b.start)
  );
  const sortPastEvents = pastEvents.sort(
    (a, b) => new Date(b.start) - new Date(a.start)
  );

  return (
    <div>
      <h2>Event Calendar</h2>
      <EventList title="Upcoming Events" events={sortUpcomingEvents} />
      <EventList title="Past Events" events={sortPastEvents} />
    </div>
  );
};

export default EventCalendar;
