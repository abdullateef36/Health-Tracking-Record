"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./doctor.module.css";
import Image from "next/image";

// Dynamically import the Bar chart component (client-side only)
const BarChart = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Bar),
  { ssr: false }
);
import "chart.js/auto";

// Sample doctor profile and appointment data
const doctorData = {
  name: "Dr. Jane Smith",
  specialization: "Cardiology",
  experience: 15,
  profileImage: "/doctor-profile.jpeg",
  appointments: [
    { date: "2025-02-20", time: "09:00 AM", patient: "John Doe", reason: "Routine Checkup" },
    { date: "2025-02-20", time: "10:30 AM", patient: "Alice Johnson", reason: "Follow-up" },
    { date: "2025-02-21", time: "11:00 AM", patient: "Robert Brown", reason: "Consultation" },
    { date: "2025-02-22", time: "08:45 AM", patient: "Sarah Lee", reason: "New Patient" },
  ],
};

// Sample chart data for monthly appointments
const monthlyAppointments = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Appointments",
      data: [20, 25, 22, 30, 28, 35, 40, 38, 33, 29, 26, 31],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

export default function DoctorPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  // Update the live clock every second
  useEffect(() => {
    setMounted(true);
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.doctorPage}>
      <header className={styles.header}>
        <div className={styles.profile}>
          <Image
            src="/doctor-profile.jpeg"
            alt="Doctor Profile"
            className={styles.profileImage}
            width={80}
            height={80}
          />
          <div className={styles.profileInfo}>
            <h1>Dr. Jane Smith</h1>
            <p>Cardiology</p>
            <p>15 years of experience</p>
          </div>
        </div>
        <div className={styles.clock}>
          {mounted ? <p>{currentTime.toLocaleTimeString()}</p> : null}
        </div>
      </header>

      <section className={styles.dashboard}>
        <div className={styles.chartSection}>
          <h2>Monthly Appointments</h2>
          <div className={styles.chartContainer}>
            <BarChart
              data={monthlyAppointments}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: { beginAtZero: true },
                },
              }}
            />
          </div>
        </div>

        <div className={styles.appointmentsSection}>
          <h2>Upcoming Appointments</h2>
          <table className={styles.appointmentsTable}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Patient</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {doctorData.appointments.map((appt, index) => (
                <tr key={index}>
                  <td>{appt.date}</td>
                  <td>{appt.time}</td>
                  <td>{appt.patient}</td>
                  <td>{appt.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 YabaTech Medical Center</p>
      </footer>
    </div>
  );
}