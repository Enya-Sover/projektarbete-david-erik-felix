import React, { useContext, useState, } from "react";
import { LoginContext } from "../context/LoginContext";
import NewEvent from "../components/newEvent";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  if (!currentUserData) {
    window.location.reload();
    return <p>Please log in to see your calendar.</p>;
  }

  const now = new Date(); // skapar en ny instans av dagens datum

  // filterfunktioner

  const sortUpcomingEvents = currentUserData?.events
    ?.filter((event) => new Date(event.start) > now)
    // konverterar datum-strängen till ett date-objekt. Om startdatum för event är senare än dagens datum, läggs det i listan.
    .sort((a, b) => new Date(a.start) - new Date(b.start));
  // sorterar listan med framtida event i stigande ordning baserat på deras startdatum
  // a placeras före b om resultatet är negativt
  // b placeras före a om resultatet är positivt
  // ser till att de närmaste framtida eventen kommer först i listan.

  const sortPastEvents = currentUserData?.events
    ?.filter((event) => new Date(event.start) <= now)
    .sort((a, b) => new Date(b.start) - new Date(a.start));

  // samma logik som för upcomming events, men spegelvänt,
  // eventet inkluderas i listan om startdatum är tidigare än dagens datum
  // de mest nyligen avslutade eventen kommer först i listan.

  // ta bort event

  const removeEvent = (id) => {
    const updatedEvents = currentUserData.events.filter(
      (event) => event.id !== id
    );
    const updatedUserData = { ...currentUserData, events: updatedEvents };
    setCurrentUserData(updatedUserData);
    setRegUser(
      regUser.map((user) =>
        user.userName === currentUserData.userName ? updatedUserData : user
      )
    );
  };

  // skapar en ny lista enbart med de event som inte har samma ID som det event som tas bort
  // om event.id === id, exkluderas det eventet från listan.

  // redigera event

  const editEvent = (updatedEvent) => {
    const updatedEvents = currentUserData.events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    const updatedUserData = { ...currentUserData, events: updatedEvents };
    setCurrentUserData(updatedUserData);
    setRegUser(
      regUser.map((user) =>
        user.userName === currentUserData.userName ? updatedUserData : user
      )
    );
  };

  // event.id === updatedEvent.id:
  // jämför ID:t för varje event med det uppdaterade eventets ID.
  // om ID:t matchar:
  // så byts det gamla eventet mot det nya (updatedEvent)
  // sedan uppdateras användadatat och användarlistan med den uppdaterade lista

  // enkel back funktion

  const handleBackClick = () => {
    navigate("/loggedin")
  };

  return (
    <div className="event-calendar-container">
      <h2 className="event-title">Event Calendar</h2>
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

        <div className="events-container2">
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

          <button className="back-button-event" onClick={handleBackClick}> Back </button>
      
    </div>
  );
};

export default EventCalendar;
