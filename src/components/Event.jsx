import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Event = ({ event }) => {

  return (
    <li className="event-item">
      <strong>{event.name}</strong> <br />
      Start: {(event.start).toLocaleString()} <br />
      Slut: {(event.end).toLocaleString()}
      <button>Redigera</button>
      <button>Ta bort</button>
    </li>
  );
};

export default Event;