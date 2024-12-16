import React from "react";

const PastEvent = ({ event }) => {

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  };

  return (<>
   <li className="event-item">
      <strong>{event.name}</strong> <br />
      Start: {formatDateTime(event.start)} <br />
      End: {formatDateTime(event.end)} <br />
      <button>Redigera</button>
      <button>Ta bort</button>
      </li>
      </>
   
  )
};

export default PastEvent
