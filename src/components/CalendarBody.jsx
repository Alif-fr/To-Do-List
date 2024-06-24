import React from "react";
import TaskTooltip from "./TaskTooltip";

const CalendarBody = ({ currentMonth, currentYear, tasks }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const hasTaskOnDate = (date, month, year) => {
    return tasks.some((task) => {
      const taskDate = new Date(task.date);
      return (
        taskDate.getDate() === date &&
        taskDate.getMonth() === month &&
        taskDate.getFullYear() === year
      );
    });
  };

  const tableHeader = (daysArray) => {
    return (
      <tr>
        {daysArray.map((day) => (
          <th key={day} data-days={day}>
            {day}
          </th>
        ))}
      </tr>
    );
  };

  let rows = [];
  let date = 1;

  for (let i = 0; i < 6; i++) {
    let cells = [];
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDayOfMonth) {
        cells.push(<td key={`empty-${j}`}></td>);
      } else if (date <= daysInMonth) {
        const cellDate = date;
        const cellKey = `${currentYear}-${currentMonth}-${cellDate}`;
        const isToday =
          cellDate === new Date().getDate() &&
          currentMonth === new Date().getMonth() &&
          currentYear === new Date().getFullYear();
        const cellClassNames = ["date-picker"];

        if (isToday) cellClassNames.push("selected");
        if (hasTaskOnDate(cellDate, currentMonth, currentYear)) {
          cellClassNames.push("task-marker");
        }

        const cellTasks = tasks.filter((task) => {
          const taskDate = new Date(task.date);
          return (
            taskDate.getDate() === cellDate &&
            taskDate.getMonth() === currentMonth &&
            taskDate.getFullYear() === currentYear
          );
        });

        cells.push(
          <td key={cellKey} className={cellClassNames.join(" ")}>
            <span>{cellDate}</span>
            {cellTasks.length > 0 && <TaskTooltip tasks={cellTasks} />}
          </td>
        );
        date++;
      }
    }
    rows.push(<tr key={`week-${i}`}>{cells}</tr>);
    if (date > daysInMonth) break;
  }

  return (
    <>
      <table className="table-calendar" id="table-calendar" data-lang="en">
        <thead id="thead-month">{tableHeader(days)}</thead>
        <tbody id="calendar-body">{rows}</tbody>
      </table>
    </>
  );
};

export default CalendarBody;
