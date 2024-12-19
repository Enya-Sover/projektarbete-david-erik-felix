import React, { useState } from "react";
import EditEvent from "./EditEvent";

const PastEvent = ({ event, onEdit, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true); 
  };

  const saveChanges = (updatedEvent) => {
    onEdit(updatedEvent);
    setIsEditing(false); 
  };

  const cancelEdit = () => {
    setIsEditing(false); 
  };

  if (isEditing) {
    return <EditEvent event={event} save={saveChanges} cancel={cancelEdit} />;
  }

  return (
    <li className="past-item">
      <strong>{event.name}</strong> <br />
      Start: {new Date(event.start).toLocaleString()} <br />
      End: {new Date(event.end).toLocaleString()} <br />
      <button onClick={handleEdit}>Edit event</button>
      <button onClick={() => onRemove(event.id)}>Remove event</button>
    </li>
  );
};

export default PastEvent;
