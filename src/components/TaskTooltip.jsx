import React from "react";

const pad = (number) => {
  return (number < 10 ? "0" : "") + number;
};

const TaskTooltip = ({ tasks }) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip-scrollable">
        {tasks.map((task, index) => (
          <div key={index} className="task-tooltip">
            <strong>{task.name}</strong> at{" "}
            {pad(new Date(task.date).getHours())}:
            {pad(new Date(task.date).getMinutes())}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTooltip;
