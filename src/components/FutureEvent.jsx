import React, { useState } from "react";
import EditEvent from "./EditEvent";

const FutureEvent = ({ event, onEdit, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
   setIsEditing(true)
  };
  
  const saveChanges = (updatedEvent) => {
    onEdit(updatedEvent)
    setIsEditing(false)
  }

  const cancelEdit = () => {
    setIsEditing(false)
  }

  if(isEditing) {
    return <EditEvent event={event} save={saveChanges} cancel={cancelEdit} />
  }

  return (<>
   <li className="future-item">
      <strong>{event.name}</strong> <br />
      Start: {new Date(event.start).toLocaleString()} <br />
      End: {new Date(event.end).toLocaleString()} <br />
      <div className="edit-buttons">
        <button onClick={handleEdit}>Edit event</button>
      <button onClick={() => onRemove(event.id)}>Remove event</button>
      </div>
      </li>
      </>
   
  )
};

export default FutureEvent
