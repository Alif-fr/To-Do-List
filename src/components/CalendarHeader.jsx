import React from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CalendarHeader = ({
  currentMonth,
  currentYear,
  nextMonth,
  previousMonth,
}) => {
  return (
    <div className="header-calendar">
      <button id="previous" onClick={previousMonth}>
        &larr;
      </button>
      <h3 id="monthandyear">{`${months[currentMonth]} ${currentYear}`}</h3>
      <button id="next" onClick={nextMonth}>
        &rarr;
      </button>
    </div>
  );
};

export default CalendarHeader;
