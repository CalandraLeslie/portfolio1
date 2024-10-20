import React, { useState, useEffect } from "react";
import "./Calender.modules.css"

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    const getDaysInMonth = (year, month) => {
      const date = new Date(year, month, 1);
      const days = [];
      while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      return days;
    };

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setDaysInMonth(getDaysInMonth(year, month));
  }, [currentDate]);

  const today = new Date();

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h2>
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </h2>
      </div>
      <div className="calendar-grid">
        {daysInMonth.map((day, index) => {
          const isToday =
            day.getDate() === today.getDate() &&
            day.getMonth() === today.getMonth() &&
            day.getFullYear() === today.getFullYear();

          return (
            <div
              key={index}
              className={`calendar-day ${isToday ? "highlight" : ""}`}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
