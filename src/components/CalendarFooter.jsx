import React from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const CalendarFooter = ({
  currentMonth,
  currentYear,
  jumpToMonth,
  jumpToYear,
}) => {
  return (
    <div className="footer-calendar">
      <div className="selectmonth">
        <label htmlFor="month">Month:</label>
        <div className="month">
          <select
            id="month"
            value={currentMonth}
            onChange={(e) => jumpToMonth(parseInt(e.target.value, 10))}
          >
            {months.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="selectyear">
        <label htmlFor="year">Year: </label>
        <div className="year">
          <select
            id="year"
            value={currentYear}
            onChange={(e) => jumpToYear(parseInt(e.target.value, 10))}
          >
            {Array.from({ length: 11 }, (_, i) => currentYear - 5 + i).map(
              (year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              )
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CalendarFooter;
