"use client";

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./department.module.css";

// Dynamically import the Bar chart component (client-side only)
const BarChart = dynamic(
  () => import("react-chartjs-2").then((mod) => mod.Bar),
  { ssr: false }
);
import "chart.js/auto";

// Sample department data
const departmentsData = [
  {
    id: 1,
    name: "Cardiology",
    head: "Dr. Jane Smith",
    description: "Heart care and cardiovascular treatments.",
    image: "/cardiology.jpeg",
    patients: 120,
    appointments: 45,
  },
  {
    id: 2,
    name: "Neurology",
    head: "Dr. John Doe",
    description: "Brain and nervous system diagnostics.",
    image: "/neurology.jpeg",
    patients: 95,
    appointments: 35,
  },
  {
    id: 3,
    name: "Radiology",
    head: "Dr. Alex Lee",
    description: "Imaging and diagnostic services.",
    image: "/radiology.jpeg",
    patients: 150,
    appointments: 60,
  },
  {
    id: 4,
    name: "Orthopedics",
    head: "Dr. Emily Davis",
    description: "Bone and joint health care.",
    image: "/orthopedics.jpeg",
    patients: 80,
    appointments: 30,
  },
  // Add more departments as needed
];

export default function DepartmentPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter departments based on search query
  const filteredDepartments = useMemo(() => {
    return departmentsData.filter((dept) =>
      dept.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Prepare chart data based on filtered departments (using patient counts)
  const chartData = useMemo(() => {
    return {
      labels: filteredDepartments.map((dept) => dept.name),
      datasets: [
        {
          label: "Patients",
          data: filteredDepartments.map((dept) => dept.patients),
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };
  }, [filteredDepartments]);

  return (
    <div className={styles.departmentPage}>
      <header className={styles.header}>
        <h1>Department Dashboard</h1>
        <p>
          Explore our specialized departments and review their performance
          metrics.
        </p>
      </header>

      <section className={styles.filterSection}>
        <input
          type="text"
          placeholder="Search departments..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
      </section>

      <section className={styles.chartSection}>
        <h2>Patients by Department</h2>
        <div className={styles.chartContainer}>
          <BarChart
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

      <section className={styles.cardsSection}>
        {filteredDepartments.map((dept) => (
          <div key={dept.id} className={styles.departmentCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={dept.image}
                alt={`${dept.name} Image`}
                layout="fill"
                objectFit="cover"
                className={styles.departmentImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>{dept.name}</h3>
              <p className={styles.head}>
                <strong>Head:</strong> {dept.head}
              </p>
              <p className={styles.description}>{dept.description}</p>
              <div className={styles.metrics}>
                <span>
                  <strong>Patients:</strong> {dept.patients}
                </span>
                <span>
                  <strong>Appointments:</strong> {dept.appointments}
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 YabaTech Medical Center</p>
      </footer>
    </div>
  );
}