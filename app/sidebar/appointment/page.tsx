"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { format } from "date-fns";
import styles from "./appointment.module.css";

// Dynamically import the Line chart component (client-side only)
const LineChart = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Line),
  { ssr: false }
);

// Sample appointment data
const appointments = [
  { id: 1, date: "2025-02-20", time: "09:00 AM", doctor: "Dr. Jane Smith", patient: "John Doe", reason: "Routine Checkup" },
  { id: 2, date: "2025-02-20", time: "10:30 AM", doctor: "Dr. Jane Smith", patient: "Alice Johnson", reason: "Follow-up" },
  { id: 3, date: "2025-02-21", time: "11:00 AM", doctor: "Dr. Michael Brown", patient: "Robert Brown", reason: "Consultation" },
  { id: 4, date: "2025-02-22", time: "08:45 AM", doctor: "Dr. Emily Davis", patient: "Sarah Lee", reason: "New Patient" },
  { id: 5, date: "2025-02-23", time: "12:00 PM", doctor: "Dr. Jane Smith", patient: "Mark Wilson", reason: "Follow-up" },
  // Add more appointments as needed...
];

export default function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [filteredAppointments, setFilteredAppointments] = useState(appointments);

  // Filter appointments based on the selected date
  useEffect(() => {
    if (selectedDate === "") {
      setFilteredAppointments(appointments);
    } else {
      setFilteredAppointments(
        appointments.filter((appt) => appt.date === selectedDate)
      );
    }
  }, [selectedDate]);

  // Dummy chart data for weekly appointments trend
  const chartLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Appointments",
        data: [3, 5, 2, 6, 4, 3, 2],
        fill: false,
        borderColor: "#36a2eb",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className={styles.appointmentPage}>
      <header className={styles.header}>
        <h1>Appointment Dashboard</h1>
        <p>Manage and track your health appointments with ease.</p>
      </header>

      <section className={styles.filterSection}>
        <label htmlFor="dateFilter">Filter by Date:</label>
        <input
          type="date"
          id="dateFilter"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button onClick={() => setSelectedDate("")}>Clear Filter</button>
      </section>

      <section className={styles.chartSection}>
        <h2>Weekly Appointments Trend</h2>
        <div className={styles.chartContainer}>
          <LineChart
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: { beginAtZero: true },
              },
            }}
          />
        </div>
      </section>

      <section className={styles.appointmentsSection}>
        <h2>Appointments List</h2>
        <table className={styles.appointmentsTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Doctor</th>
              <th>Patient</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appt) => (
              <tr key={appt.id}>
                <td>{format(new Date(appt.date), "MMM dd, yyyy")}</td>
                <td>{appt.time}</td>
                <td>{appt.doctor}</td>
                <td>{appt.patient}</td>
                <td>{appt.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 YabaTech Medical Center</p>
      </footer>
    </div>
  );
}