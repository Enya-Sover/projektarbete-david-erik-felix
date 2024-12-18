import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import NewEvent from "../components/newEvent";
import { Link } from "react-router-dom";
import FutureEvent from "../components/FutureEvent";
import PastEvents from "../components/PastEvents";
import "../events.css";

const EventCalendar = () => {
  const {
    regUser,
    setRegUser,
    currentUser,
    setCurrentUserData,
    currentUserData,
  } = useContext(LoginContext);

  const [filter, setFilter] = useState("none"); 
  if (!currentUserData) {
    window.location.reload();
    return <p>Please log in to see your calendar.</p>;
  }

  const now = new Date();

  // filterfunktioner

  const sortUpcomingEvents = currentUserData?.events
    ?.filter((event) => new Date(event.start) > now)
    .sort((a, b) => new Date(a.start) - new Date(b.start));

  const sortPastEvents = currentUserData?.events
    ?.filter((event) => new Date(event.start) <= now)
    .sort((a, b) => new Date(b.start) - new Date(a.start));


    // ta bort event

  const removeEvent = (id) => {
    const updatedEvents = currentUserData.events.filter((event) => event.id !== id);
    const updatedUserData = { ...currentUserData, events: updatedEvents };
    setCurrentUserData(updatedUserData);
    setRegUser(
      regUser.map((user) => (user.userName === currentUserData.userName ? updatedUserData : user))
    );
  };

  // redigera event 

  const editEvent = (updatedEvent) => {
    const updatedEvents = currentUserData.events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    const updatedUserData = { ...currentUserData, events: updatedEvents };
    setCurrentUserData(updatedUserData);
    setRegUser(
      regUser.map((user) => (user.userName === currentUserData.userName ? updatedUserData : user))
    );
  };

  return (
    <div>
      <h2>Event Calendar</h2>
      <NewEvent />

      <div className="filter-dropdown">
        <label htmlFor="eventFilter">Filter events: </label>
        <select
          id="eventFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="none">Show All</option>
          <option value="upcoming">Upcoming Events</option>
          <option value="past">Past Events</option>
        </select>
      </div>

      {/* Visar både kommande och tidigare händelser med möjlighet att filtrera bort vissa */}
      <div className="events-container">
        {/* Upcoming Events */}
        {filter !== "past" && (
          <div className="new-events-container">
            <h3>Upcoming Events:</h3>
            <ul>
              {sortUpcomingEvents.map((event) => (
                <FutureEvent
                  key={event.id}
                  event={event}
                  onEdit={editEvent}
                  onRemove={removeEvent}
                />
              ))}
            </ul>
          </div>
        )}

        {/* Past Events */}
        {filter !== "upcoming" && (
          <div className="past-events-container">
            <h3>Past Events:</h3>
            <ul>
              {sortPastEvents.map((event) => (
                <PastEvents
                  key={event.id}
                  event={event}
                  onEdit={editEvent}
                  onRemove={removeEvent}
                />
              ))}
            </ul>
          </div>
        )}
      </div>

      <Link to="/loggedin">Back</Link>
    </div>
  );
};

export default EventCalendar;
