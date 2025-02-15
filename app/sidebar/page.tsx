"use client";

import React from "react";
import "./dashboard.css";

import {
  FaUserMd,
  FaUsers,
  FaUserTie,
  FaUserNurse,
  FaCapsules,
  FaMicroscope,
  FaMoneyCheck,
  FaConciergeBell,
} from "react-icons/fa";

export default function DashboardPage() {
  return (
    <div className="dashboard-container">
      {/* Top bar */}
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Dashboard</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="dashboard-main">
        {/* Title + Breadcrumb */}
        <div className="dashboard-title">
          <h2>Dashboard</h2>
          <p>Dashboard features</p>
          <nav className="breadcrumb">
            <a href="#">Home</a> / <span>Dashboard</span>
          </nav>
        </div>

        {/* Cards Grid */}
        <div className="cards-grid">
          <div className="card">
            <div className="card-left">
              <FaUserMd className="card-icon" />
              <span className="card-label">Active Doctors</span>
            </div>
            <span className="card-number">0</span>
          </div>

          <div className="card">
            <div className="card-left">
              <FaUsers className="card-icon" />
              <span className="card-label">Active Patients</span>
            </div>
            <span className="card-number">0</span>
          </div>

          <div className="card">
            <div className="card-left">
              <FaUserTie className="card-icon" />
              <span className="card-label">Representative</span>
            </div>
            <span className="card-number">0</span>
          </div>

          <div className="card">
            <div className="card-left">
              <FaUserNurse className="card-icon" />
              <span className="card-label">Active Nurses</span>
            </div>
            <span className="card-number">0</span>
          </div>

          <div className="card">
            <div className="card-left">
              <FaCapsules className="card-icon" />
              <span className="card-label">Pharmacist</span>
            </div>
            <span className="card-number">0</span>
          </div>

          <div className="card">
            <div className="card-left">
              <FaMicroscope className="card-icon" />
              <span className="card-label">Laboratist</span>
            </div>
            <span className="card-number">0</span>
          </div>

          <div className="card">
            <div className="card-left">
              <FaMoneyCheck className="card-icon" />
              <span className="card-label">Accountant</span>
            </div>
            <span className="card-number">0</span>
          </div>

          <div className="card">
            <div className="card-left">
              <FaConciergeBell className="card-icon" />
              <span className="card-label">Receptionist</span>
            </div>
            <span className="card-number">0</span>
          </div>
        </div>
      </main>
    </div>
  );
}