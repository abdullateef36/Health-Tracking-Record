"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./front.css";

export default function Home() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(true);

  // Animation effect for the button
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleCheckIn = () => {
    router.push("/sidebar");
  };

  return (
    <div className="container">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="logo-title">
          <Image
            src="/logo.png"
            alt="Yabatech Logo"
            width={60}
            height={60}
            className="logo"
          />
          <div className="title-container">
            <h1>Yabatech Medical Centre</h1>
            <p className="tagline">Excellence in Healthcare Delivery</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Your Health, Our Priority</h2>
          <p className="subtitle">
            Access comprehensive medical services and manage your health records with ease.
          </p>

          <div
            className={`check-in-button ${isAnimating ? 'pulse' : ''}`}
            onClick={handleCheckIn}
          >
            <span>Click to check your medical records</span>
            <div className="arrow-icon">→</div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚕️</div>
              <h3>24/7 Access</h3>
              <p>View your records anytime, anywhere</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Digital Prescriptions</h3>
              <p>Access your medications digitally</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure</h3>
              <p>Your data is always protected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Yabatech Medical Centre. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}