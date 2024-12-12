import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import EventList from "../components/EventList";
import NewEvent from "../components/newEvent";
import { Link } from "react-router-dom";

const EventCalendar = () => {
  const { regUser, setRegUser, currentUser } = useContext(LoginContext);

  const [currentUserData, setCurrentUserData] = useState(
    regUser.find((user) => user.userName === currentUser)
  );

  const updateUserData = (updatedData) => {
    setCurrentUserData(updatedData);

    const updatedUsers = regUser.map((user) =>
      user.userName === currentUser ? updatedData : user
    );
    setRegUser(updatedUsers);
  };
  if (!currentUserData) {
    return <p>Please log in to see your calendar.</p>;
  }

  // variabler och funktioner för händelser
  const userEvents = currentUser ? currentUserData?.events : [];
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
  // console.log(currentUserData);
  return (
    <div>
      <h2>Event Calendar</h2>
      <NewEvent
        currentUserData={currentUserData}
        updateUserData={updateUserData}
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
