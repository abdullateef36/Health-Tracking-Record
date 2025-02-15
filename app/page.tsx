"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./front.css"; // Import the CSS file

export default function Home() {
  const router = useRouter();
  const [medicalID, setMedicalID] = useState("");

  // Function to handle "Login" click
  const handleLogin = () => {
    // Alert if the input is empty
    if (!medicalID) {
      alert("Please input your Medical ID");
      return;
    }

    // Check if medicalID is between "0001" and "0009"
    const validIDs = ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009"];
    if (validIDs.includes(medicalID)) {
      // Redirect to /sidebar (client-side navigation)
      router.push("/sidebar");
    } else {
      alert("Invalid Medical ID");
    }
  };

  // Handle key presses in the input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Prevent any default form submission behavior
      e.preventDefault();
      handleLogin();
    }
  };

  return (
    <div>
      {/* Header (navbar) */}
      <header className="header">
        {/* Logo & Title */}
        <div className="logo-title">
          <Image src="/logo.png" alt="Yabatech Logo" width={40} height={40} />
          <span className="title">YABATECH MEDICAL CENTRE</span>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#">Solutions</a>
          <a href="#">About</a>
          <a href="#">Support</a>
          <a href="#">Policies</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          WELCOME TO YABATECH
          <br />
          MEDICAL CENTRE PORTAL
        </h1>

        <div className="input-container">
          {/* Controlled password input for Medical ID */}
          <input
            type="password"
            placeholder="Enter Your Medical ID"
            value={medicalID}
            onChange={(e) => setMedicalID(e.target.value)}
            onKeyDown={handleKeyDown}  // Listen for Enter key
          />
          <button onClick={handleLogin}>Login</button>
        </div>

        {/* Medical Icon (Caduceus) */}
        <div className="medical-icon">
          <Image
            src="/medical-icon.png"
            alt="Medical Icon"
            width={300}
            height={300}
            priority
          />
        </div>

        {/* Medical Record Badge */}
        <div className="medical-record">
          <Image
            src="/medical-record.png"
            alt="Medical Record Badge"
            width={267}
            height={189}
          />
        </div>
      </section>
    </div>
  );
}