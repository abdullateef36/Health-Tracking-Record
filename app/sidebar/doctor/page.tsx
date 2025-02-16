"use client";

import React from "react";
import "./doctor.css";
import { FaStethoscope } from "react-icons/fa"; // Use as the doctor icon

export default function DoctorPage() {
  // Dummy data for demonstration purposes
  const doctors = [
    { id: 1, name: "Dr. John Doe", specialty: "Cardiology" },
    { id: 2, name: "Dr. Jane Smith", specialty: "Pediatrics" },
    { id: 3, name: "Dr. Michael Brown", specialty: "Neurology" },
    { id: 4, name: "Dr. Emily Davis", specialty: "Orthopedics" },
    { id: 5, name: "Dr. Robert Wilson", specialty: "Dermatology" },
    { id: 6, name: "Dr. Sarah Johnson", specialty: "Ophthalmology" },
  ];

  return (
    <div className="doctor-container">
      {/* Title row */}
      <div className="doctor-title-row">
        <div className="doctor-left">
          <div className="doctor-big-icon">
            <FaStethoscope className="doctor-icon" />
          </div>
          <div className="doctor-text-group">
            <h2>Doctors</h2>
            <p>List of available doctors</p>
          </div>
        </div>
        <nav className="breadcrumb">
          <a href="#">Home</a> / <span>Doctors</span>
        </nav>
      </div>

      {/* Doctors grid */}
      <div className="doctor-grid">
        {doctors.map((doc) => (
          <div key={doc.id} className="doctor-card">
            <div className="doctor-card-icon">
              <FaStethoscope />
            </div>
            <div className="doctor-card-info">
              <h3>{doc.name}</h3>
              <p>{doc.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
