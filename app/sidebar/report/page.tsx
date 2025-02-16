"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./result.module.css";
import "chart.js/auto";

// Dynamically import the Line chart (client-side only)
const LineChart = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

// Sample patient information
const patientInfo = {
  name: "John Doe",
  age: 40,
  gender: "Male",
  lastVisit: "2025-02-20",
  profileImage: "/patient-profile.png", // Place your image in the public folder
};

// Sample vital signs
const vitalSigns = {
  bloodPressure: "120/80 mmHg",
  heartRate: "72 bpm",
  temperature: "98.6°F",
  respiratoryRate: "16 breaths/min",
  weight: "80 kg",
};

// Sample lab test results
const labTests = [
  { test: "Cholesterol", value: "190 mg/dL", range: "125-200 mg/dL", interpretation: "Normal" },
  { test: "Fasting Blood Sugar", value: "95 mg/dL", range: "70-99 mg/dL", interpretation: "Normal" },
  { test: "Hemoglobin", value: "14 g/dL", range: "13.5-17.5 g/dL", interpretation: "Normal" },
  { test: "Vitamin D", value: "30 ng/mL", range: "20-50 ng/mL", interpretation: "Sufficient" },
];

// Sample chart data for blood pressure trends over the past 6 months
const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Systolic BP",
      data: [118, 120, 122, 119, 121, 120],
      fill: false,
      borderColor: "#ff6384",
      tension: 0.3,
    },
    {
      label: "Diastolic BP",
      data: [78, 80, 79, 77, 80, 79],
      fill: false,
      borderColor: "#36a2eb",
      tension: 0.3,
    },
  ],
};

export default function ResultPage() {
  return (
    <div className={styles.resultPage}>
      <header className={styles.header}>
        <h1>Health Tracking Results</h1>
        <p>Your comprehensive health overview at a glance.</p>
      </header>

      <section className={styles.patientInfo}>
        <div className={styles.profileImageWrapper}>
          <Image
            src={patientInfo.profileImage}
            alt="Patient Profile"
            width={100}
            height={100}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.patientDetails}>
          <h2>{patientInfo.name}</h2>
          <p>
            <strong>Age:</strong> {patientInfo.age}
          </p>
          <p>
            <strong>Gender:</strong> {patientInfo.gender}
          </p>
          <p>
            <strong>Last Visit:</strong> {patientInfo.lastVisit}
          </p>
        </div>
      </section>

      <section className={styles.vitals}>
        <h2>Vital Signs</h2>
        <div className={styles.vitalCards}>
          <div className={styles.vitalCard}>
            <h3>Blood Pressure</h3>
            <p>{vitalSigns.bloodPressure}</p>
          </div>
          <div className={styles.vitalCard}>
            <h3>Heart Rate</h3>
            <p>{vitalSigns.heartRate}</p>
          </div>
          <div className={styles.vitalCard}>
            <h3>Temperature</h3>
            <p>{vitalSigns.temperature}</p>
          </div>
          <div className={styles.vitalCard}>
            <h3>Respiratory Rate</h3>
            <p>{vitalSigns.respiratoryRate}</p>
          </div>
          <div className={styles.vitalCard}>
            <h3>Weight</h3>
            <p>{vitalSigns.weight}</p>
          </div>
        </div>
      </section>

      <section className={styles.chartSection}>
        <h2>Blood Pressure Trend</h2>
        <div className={styles.chartContainer}>
          <LineChart
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: { y: { beginAtZero: false } },
            }}
          />
        </div>
      </section>

      <section className={styles.labResults}>
        <h2>Lab Test Results</h2>
        <table className={styles.resultsTable}>
          <thead>
            <tr>
              <th>Test</th>
              <th>Result</th>
              <th>Normal Range</th>
              <th>Interpretation</th>
            </tr>
          </thead>
          <tbody>
            {labTests.map((test, index) => (
              <tr key={index}>
                <td>{test.test}</td>
                <td>{test.value}</td>
                <td>{test.range}</td>
                <td>{test.interpretation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className={styles.recommendations}>
        <h2>Recommendations</h2>
        <p>
          Based on your current results, all your metrics fall within the normal ranges.
          We recommend maintaining your current lifestyle with a balanced diet and regular exercise.
          Continue with periodic checkups to ensure sustained optimal health.
        </p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 YabaTech Medical Center</p>
      </footer>
    </div>
  );
}