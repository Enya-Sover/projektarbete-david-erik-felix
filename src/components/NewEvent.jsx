import React, { useState, useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const NewEvent = ({ updateUserData }) => {
  const {
    regUser,
    setRegUser,
    currentUser,
    setCurrentUserData,
    currentUserData,
  } = useContext(LoginContext);

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("");

  const createNewEvent = () => {
    const newEvent = {
      id: Date.now(),
      name: name,
      start: startTime,
      end: endTime,
    };

    if (!startTime || !endTime || !name) {
      alert("Please fill in all fields!");
      return;
    }

    const updateUserData = {
      ...currentUserData,
      events: [...currentUserData?.events, newEvent],
    };

    const updatedUsers = regUser.map((user) =>
      user.userName === currentUser ? updateUserData : user
    );
    setRegUser(updatedUsers);
    setCurrentUserData(updateUserData);

   
    alert("Event created successfully");
  };

  return (
    <div className="create-event-container">
      <label htmlFor="name">
        {"Title: "}
        <input
          type="text"
          placeholder="..."
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label htmlFor="startTime">
        {"Starts at: "}
        <input type="time" onChange={(e) => setStartTime(e.target.value)} />
      </label>

      <label htmlFor="endTime">
        {"Ends at: "}
        <input type="time" onChange={(e) => setEndTime(e.target.value)} />
      </label>

      <button onClick={createNewEvent}> Create event </button>
    </div>
  );
};

export default NewEvent;
