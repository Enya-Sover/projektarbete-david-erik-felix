// EventCalendar.jsx
import React, { useContext } from 'react';
import { LoginContext } from "../context/LoginContext";
import EventList from '../components/EventList';

const EventCalendar = () => {
  const { regUser, currentUser } = useContext(LoginContext);

  const user = currentUser
    ? regUser.find((user) => user.userName === currentUser)
    : regUser[0];

  if (!user || !user.events || user.events.length === 0) {
    return <p>No events available</p>;
  }

  return (
    <div className="event-container">
      <h2>Event Calendar</h2>
      <EventList events={user.events} /> 
    </div>
  );
};

export default EventCalendar;
