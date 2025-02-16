"use client";

import React, { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarFooter.css"; // Import your custom styles

export default function CalendarFooter() {
  // Allow null for unselected or initial state
  const [currentDate, setCurrentDate] = useState<Date | null>(new Date());

  // Define special clinic events (adjust dates as needed)
  const clinicEvents = [
    { date: new Date(2025, 4, 12), label: "Mother's Day Special" }, // May 12, 2025
    { date: new Date(2025, 5, 16), label: "Father's Day Screening" }, // June 16, 2025
    { date: new Date(2025, 1, 14), label: "Valentine's Heart Checkup" }, // Feb 14, 2025
    { date: new Date(2025, 10, 10), label: "Thanksgiving Health Check" }, // Nov 10, 2025
  ];

  // Handler for date changes
  const handleDateChange: CalendarProps["onChange"] = (value) => {
    if (!value) {
      setCurrentDate(null);
      return;
    }
    if (Array.isArray(value)) {
      setCurrentDate(value[0]);
    } else {
      setCurrentDate(value);
    }
  };

  // Custom tile content to display event badges
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      // Check if there's a special event on this date
      const event = clinicEvents.find(
        (ev) =>
          ev.date.getFullYear() === date.getFullYear() &&
          ev.date.getMonth() === date.getMonth() &&
          ev.date.getDate() === date.getDate()
      );
      if (event) {
        return <div className="clinic-event">{event.label}</div>;
      }
      // Otherwise, for Mondays mark as Regular Checkup Day
      if (date.getDay() === 1) {
        return <div className="clinic-day">Regular Checkup</div>;
      }
    }
    return null;
  };

  return (
    <div className="calendar-container">
      <h3 className="calendar-title">Clinic Calendar</h3>
      <Calendar
        onChange={handleDateChange}
        value={currentDate}
        tileContent={tileContent}
        selectRange={false}
      />
      <p className="selected-date">
        Selected date: {currentDate ? currentDate.toDateString() : "None"}
      </p>
    </div>
  );
}