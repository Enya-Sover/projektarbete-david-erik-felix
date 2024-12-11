import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Event = () => {
    const { regUser, currentUser } = useContext(LoginContext);
  
    const user = currentUser
      ? regUser.find((user) => user.userName === currentUser)  
      : regUser[0];  
  
    
    if (!user || !user.events || user.events.length === 0) {
      return <p>No events available</p>;
    }
  
    return (
      <div className="event-container">
        {user.events.map((event) => (
          <div key={event.id} className="event-info">
            <h3>{event.name.charAt(0).toUpperCase() + event.name.slice(1)}</h3>
            <p>Start: {new Date(event.start).toLocaleString()}</p>
            <p>End: {new Date(event.end).toLocaleString()}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Event;