"use client";

import React from "react";
import dynamic from "next/dynamic";
import 'chart.js/auto'; // Registers Chart.js components automatically
import styles from "./patient.module.css";

// Dynamically import the Line chart so it doesn't run on the server
const LineChart = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Line),
  { ssr: false }
);

// Sample patient data and health records
const patientData = {
  name: "Patrick Zain",
  age: 35,
  lastCheckup: "2025-02-10",
  records: [
    { date: "2025-02-01", bloodPressure: "120/80", heartRate: 72, weight: 80 },
    { date: "2025-02-08", bloodPressure: "125/82", heartRate: 70, weight: 79 },
    { date: "2025-02-15", bloodPressure: "118/78", heartRate: 74, weight: 80 },
  ],
};

// Prepare chart data based on the patient's records
const chartData = {
  labels: patientData.records.map((record) => record.date),
  datasets: [
    {
      label: "Heart Rate (bpm)",
      data: patientData.records.map((record) => record.heartRate),
      fill: false,
      borderColor: "#ff6384",
      tension: 0.3,
    },
    {
      label: "Weight (kg)",
      data: patientData.records.map((record) => record.weight),
      fill: false,
      borderColor: "#36a2eb",
      tension: 0.3,
    },
  ],
};

export default function PatientPage() {
  return (
    <div className={styles.patientPage}>
      <header className={styles.header}>
        <h1>Patient Health Tracking Records</h1>
      </header>

      <section className={styles.profileSection}>
        <div className={styles.profileCard}>
          <h2>{patientData.name}</h2>
          <p>
            <strong>Age:</strong> {patientData.age}
          </p>
          <p>
            <strong>Last Checkup:</strong> {patientData.lastCheckup}
          </p>
        </div>
      </section>

      <section className={styles.recordsSection}>
        <h2>Recent Health Metrics</h2>
        <div className={styles.chartContainer}>
          <LineChart data={chartData} />
        </div>

        <table className={styles.recordsTable}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Blood Pressure</th>
              <th>Heart Rate (bpm)</th>
              <th>Weight (kg)</th>
            </tr>
          </thead>
          <tbody>
            {patientData.records.map((record, index) => (
              <tr key={index}>
                <td>{record.date}</td>
                <td>{record.bloodPressure}</td>
                <td>{record.heartRate}</td>
                <td>{record.weight}</td>
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