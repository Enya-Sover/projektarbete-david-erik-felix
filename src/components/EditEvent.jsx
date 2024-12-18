import React, { useState } from "react";

const EditEvent = ({ event, save, cancel }) => {
  const [eventTitle, setEventTitle] = useState(event.name);
  const [eventStart, setEventStart] = useState(event.start);
  const [eventEnd, setEventEnd] = useState(event.end);

  const handleSave = () => {
    const updatedEvent = {
      ...event,
      name: eventTitle,
      start: eventStart,
      end: eventEnd,
    };
    save(updatedEvent);
  };

  return (
    <div className="edit-event-form">
    <label>
        Title:
        <input
          type="text"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Start Time:
        <input type="dateTime-local"
        value={eventStart}
        onChange={(e) => setEventStart(e.target.value)} 
        />
      </label>
      <br/>
      <label>
        End Time:
        <input
          type="datetime-local"
          value={eventEnd}
          onChange={(e) => setEventEnd(e.target.value)}
        />
      </label>
      <br/>
      <button onClick={handleSave}>Save Changes</button>
      <button onClick={cancel}>Cancel</button>
    </div>
  );
};

export default EditEvent;
