      import React from "react";

      const pad = (number) => {
        return (number < 10 ? "0" : "") + number;
      }

      const TaskItem = ({ task, onDelete }) => {
        const taskDate = new Date(task.date);
        const formattedDate = `${pad(taskDate.getDate())}/${
          pad(taskDate.getMonth() + 1
        )}/${pad(taskDate.getFullYear())} at ${pad(taskDate.getHours())}:${pad(taskDate.getMinutes())}`;

        return (
          <li>
            <span><strong>{task.name}</strong> on {formattedDate}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        );
      };

      export default TaskItem;
