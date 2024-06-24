import React from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarBody from "./CalendarBody";
import CalendarFooter from "./CalendarFooter";

const Calendar = ({
  currentMonth,
  currentYear,
  tasks,
  nextMonth,
  previousMonth,
  jumpToMonth,
  jumpToYear,
}) => {
  return (
    <div id="calendar">
      <CalendarHeader
        currentMonth={currentMonth}
        currentYear={currentYear}
        nextMonth={nextMonth}
        previousMonth={previousMonth}
      />
      <hr className="listline" />
      <CalendarBody
        currentMonth={currentMonth}
        currentYear={currentYear}
        tasks={tasks}
      />
      <hr className="calendarline" />
      <CalendarFooter
        currentMonth={currentMonth}
        currentYear={currentYear}
        jumpToMonth={jumpToMonth}
        jumpToYear={jumpToYear}
      />
    </div>
  );
};

export default Calendar;
