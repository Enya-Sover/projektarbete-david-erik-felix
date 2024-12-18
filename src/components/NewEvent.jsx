import React, { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const NewEvent = () => {
  const {
    regUser,
    setRegUser,
    currentUser,
    setCurrentUserData,
    currentUserData,
  } = useContext(LoginContext);

  const [name, setName] = useState("");
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")

 

  const createNewEvent = () => {
    if (!name || !start || !end) {
      alert("Please fill in all fields!");
      return;
    }
  
    const newEvent = {
      id: Date.now(),
      name: name,
      start: start,
      end: end,
    };
  
    const updatedUserData = {
      ...currentUserData,
      events: [...currentUserData?.events, newEvent],
    };
  
    const updatedUsers = regUser.map((user) =>
      user.userName === currentUser ? updatedUserData : user
    );
  
    setRegUser(updatedUsers);
    setCurrentUserData(updatedUserData);
  
    alert("Event created successfully");
    setName("");
    setStart("");
    setEnd("");
  };

  return (
    <div className="create-event-container">
      <label>
        {"Title: "}
        <input
          type="text"
          placeholder="..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <br />
  <label>
    {"Start: "}
    <input
      type="datetime-local"
      value={start}
      onChange={(e) => setStart(e.target.value)}
    />
  </label>
  <br />
  <label>
    {"End: "}
    <input
      type="datetime-local"
      value={end}
      onChange={(e) => setEnd(e.target.value)}
    />
  </label>
  <br />
  <button onClick={createNewEvent}>Create event</button>
</div>
  );
};

export default NewEvent;
