import React, { useState } from "react";

const TaskForm = ({ addTask, username }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [inputType, setInputType] = useState("text");

  const handleFocus = () => {
    setInputType("datetime-local");
  };

  const handleBlur = () => {
    if (!taskDate) {
      setInputType("text");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !taskDate) {
      alert("Please fill in both task and date");
      return;
    }

    addTask({ id: Date.now(), name: taskName, date: taskDate });
    setTaskName("");
    setTaskDate("");
    setInputType("text");
  };

  return (
    <form className="inputcontainer" onSubmit={handleSubmit}>
      <div className="inputteam">
        <div className="input">
          <input
            id="textInput"
            type="text"
            placeholder="What's your activity?"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            id="dateInput"
            type={inputType}
            placeholder="When is it?"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <button id="buttoninput" type="submit">
        List it up!
      </button>
    </form>
  );
};

export default TaskForm;
