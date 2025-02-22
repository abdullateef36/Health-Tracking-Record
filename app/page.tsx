"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./front.css"; // Import the updated CSS file

export default function Home() {
  const router = useRouter();
  const [medicalID, setMedicalID] = useState("");

  const handleLogin = () => {
    if (!medicalID) {
      alert("Please input your Medical ID");
      return;
    }
    const validIDs = ["0001", "0002", "0003", "0004", "0005", "0006", "0007", "0008", "0009"];
    if (validIDs.includes(medicalID)) {
      router.push("/sidebar");
    } else {
      alert("Invalid Medical ID");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleLogin();
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo-title">
          <Image src="/logo.png" alt="Yabatech Logo" width={50} height={50} />
          <h1>Yabatech Medical Centre</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Welcome to Your Medical Portal</h2>
          <p>Access your records and manage your health seamlessly.</p>
          <div className="input-container">
            <input
              type="password"
              placeholder="Enter Your Medical ID"
              value={medicalID}
              onChange={(e) => setMedicalID(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
        <div className="hero-images">
          <Image src="/medical-icon.png" alt="Medical Icon" width={300} height={300} priority />
          <Image src="/medical-record.png" alt="Medical Record Badge" width={267} height={189} />
        </div>
      </section>
    </div>
  );
}