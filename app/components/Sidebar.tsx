"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./sidebar.css";

import {
  FaTachometerAlt,
  FaUserMd,
  FaUserInjured,
  FaBuilding,
  FaCalendarAlt,
  FaCalendarCheck,
  FaMoneyBillAlt,
  FaChartBar,
} from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
      {/* Top bar with brand and hamburger button */}
      <div className="sidebar-top">
        {isOpen && (
          <h1 className="sidebar-brand">
            <span className="yabatech">YABATECH</span>{" "}
            <span className="health">HEALTH</span>{" "}
            <span className="admin">ADMIN</span>
          </h1>
        )}
        <button className="sidebar-hamburger" onClick={toggleSidebar}>
          <svg
            className="hamburger-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // "X" icon for closing
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon for opening
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* User info only if isOpen */}
      {isOpen && (
        <div className="sidebar-user">
          <div className="avatar">
            <Image src="/avatar.png" alt="User Avatar" width={40} height={40} className="avatar-image" />
          </div>
          <div className="user-info">
            <p className="user-welcome">Welcome</p>
            <p className="user-name">Admin</p>
          </div>
        </div>
      )}

      {/* Navigation links */}
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link href="/sidebar">
              <FaTachometerAlt className="nav-icon" />
              {isOpen && <span className="nav-text">Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link href="/sidebar/doctor">
              <FaUserMd className="nav-icon" />
              {isOpen && <span className="nav-text">Doctor</span>}
            </Link>
          </li>
          <li>
            <Link href="/sidebar/patient">
              <FaUserInjured className="nav-icon" />
              {isOpen && <span className="nav-text">Patient</span>}
            </Link>
          </li>
          <li>
            <Link href="/sidebar/department">
              <FaBuilding className="nav-icon" />
              {isOpen && <span className="nav-text">Department</span>}
            </Link>
          </li>
          <li>
            <Link href="/sidebar/schedule">
              <FaCalendarAlt className="nav-icon" />
              {isOpen && <span className="nav-text">Schedule</span>}
            </Link>
          </li>
          <li>
            <Link href="/sidebar/appointment">
              <FaCalendarCheck className="nav-icon" />
              {isOpen && <span className="nav-text">Appointment</span>}
            </Link>
          </li>
          <li>
            <Link href="/sidebar/prescription">
              <FaMoneyBillAlt className="nav-icon" />
              {isOpen && <span className="nav-text">Prescription Management</span>}
            </Link>
          </li>
          <li>
            <Link href="/sidebar/report">
              <FaChartBar className="nav-icon" />
              {isOpen && <span className="nav-text">Report</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}