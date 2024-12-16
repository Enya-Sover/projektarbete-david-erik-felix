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
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

 

  const createNewEvent = () => {
    const newEvent = {
      id: Date.now(),
      name: name,
      start: `${startDate}T${startTime}`,
      end: `${endDate}T${endTime}`,
    };

    if (!startTime || !startDate || !endTime || !name) {
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label htmlFor="startDate">
      {"Start date: "}
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>

      <label htmlFor="endDate">
      {"End date: "}
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>

      <label htmlFor="startTime">
        {"Starts at: "}
        <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
      </label>

      <label htmlFor="endTime">
        {"Ends at: "}
        <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
      </label>

      <button onClick={createNewEvent}> Create event </button>
    </div>
  );
};

export default NewEvent;
