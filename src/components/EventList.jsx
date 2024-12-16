import React, { useContext } from "react";
import Event from "./Event";
import { LoginContext } from "../context/LoginContext";

const EventList = ({ title }) => {
  const { currentUserData } = useContext(LoginContext);

  return (
    <div className="event-list">
      <h3>{title}</h3>
      {currentUserData?.events?.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <ul>
          {currentUserData?.events.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
