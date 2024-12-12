import React from "react";
import Event from "./Event";

const EventList = ({ title, currentUserData }) => {
 
  return (
    <div className="event-list">
      <h3>{title}</h3>
      {events?.length === 0 ? (
        <p>No events available.</p>
      ) : (
        <ul>
          {events?.map((event) => (
            <Event key={event.id} event={event} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
