import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import EventList from "../components/EventList";
import { Link } from "react-router-dom";

const EventCalendar = () => {
  const { regUser, currentUser } = useContext(LoginContext);

  const [startTime, setStartTime] = useState("");
  const [name, setName] = useState("");

  const [currentUserData, setCurrentUserData] = useState(
    regUser.find((user) => user.userName === currentUser)
  );


  if (!currentUser) {
    return <p>Please log in to see your calendar.</p>;
  }

  // const currentEvent = {
  //   id: id,
  //   name: name,
  //   start: startTime,
  //   end,
  // };

  // variabler och funktioner för händelser
  const userEvents = currentUser ? currentUserData.events : [];
  const now = new Date();
  const upcomingEvents = userEvents.filter(
    (event) => new Date(event.start) > now
  );
  const pastEvents = userEvents.filter((event) => new Date(event.start) <= now);

  // funktioner för att sortera events
  const sortUpcomingEvents = upcomingEvents.sort(
    (a, b) => new Date(a.start) - new Date(b.start)
  );
  const sortPastEvents = pastEvents.sort(
    (a, b) => new Date(b.start) - new Date(a.start)
  );
  console.log(currentUserData);
  return (
    <div>
      <h2>Event Calendar</h2>
      <input
        type="text"
        placeholder="Starttid"
        onChange={(e) => setStartTime(e.target.value)}
      />
      <EventList title="Upcoming Events" events={sortUpcomingEvents} />
      <EventList
        title="Past Events"
        events={sortPastEvents}
        currentUserData={currentUserData}
      />
      <Link to="/loggedin">Back</Link>
    </div>
  );
};

export default EventCalendar;
