import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, currentMonth, currentYear, onDelete }) => {
  const filteredTask = React.useMemo(() => {
    if (!tasks) return [];
    return tasks.filter((task) => {
      if (!task.date) return false;
      const taskDate = new Date(task.date);
      return (
        taskDate.getMonth() === currentMonth &&
        taskDate.getFullYear() === currentYear
      );
    });
  }, [tasks, currentMonth, currentYear]);

  return (
    <div id="listcontainer">
      <h3 id="todaylist">This Month's List!</h3>
      <hr className="listline" />
      {filteredTask.length === 0 ? (
        <div id="noTaskMessage"> No Task this Month, Friend! </div>
      ) : (
        <ul id="taskList">
          {filteredTask.map((task) => (
            <TaskItem key={task.id} task={task} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
