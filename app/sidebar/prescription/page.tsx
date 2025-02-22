"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./prescription.css";

export default function PrescriptionManagement() {
  // Dummy prescription data
  const [prescriptions, setPrescriptions] = useState([
    { id: 1, patient: "John Doe", medication: "Paracetamol", dosage: "500mg", instructions: "Take one tablet every 6 hours", date: "2025-02-20" },
    { id: 2, patient: "Jane Smith", medication: "Ibuprofen", dosage: "200mg", instructions: "Take one tablet every 8 hours", date: "2025-02-18" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ patient: "", medication: "", dosage: "", instructions: "", date: "" });
  const [searchTerm, setSearchTerm] = useState("");

  // Open/close modal
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Handle new prescription submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPrescription = { ...formData, id: prescriptions.length + 1 };
    setPrescriptions([...prescriptions, newPrescription]);
    setFormData({ patient: "", medication: "", dosage: "", instructions: "", date: "" });
    closeModal();
  };

  // Filter prescriptions based on search input
  const filteredPrescriptions = prescriptions.filter((prescription) =>
    prescription.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.medication.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="prescription-container">
      {/* Header */}
      <header className="pm-header">
        <div className="pm-logo">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1>Prescription Management</h1>
        </div>
        <div className="pm-search">
          <input
            type="text"
            placeholder="Search by patient or medication..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="pm-add-btn" onClick={openModal}>+ Add Prescription</button>
      </header>

      {/* Prescription List */}
      <div className="pm-prescription-list">
        {filteredPrescriptions.map((prescription) => (
          <div key={prescription.id} className="pm-prescription-card">
            <h2>{prescription.patient}</h2>
            <p><strong>Medication:</strong> {prescription.medication}</p>
            <p><strong>Dosage:</strong> {prescription.dosage}</p>
            <p><strong>Date:</strong> {prescription.date}</p>
            <p className="pm-instructions">{prescription.instructions}</p>
          </div>
        ))}
        {filteredPrescriptions.length === 0 && <p className="pm-no-data">No prescriptions found.</p>}
      </div>

      {/* Modal for Adding a Prescription */}
      {showModal && (
        <div className="pm-modal-overlay" onClick={closeModal}>
          <div className="pm-modal" onClick={(e) => e.stopPropagation()}>
            <h2>Add New Prescription</h2>
            <form onSubmit={handleSubmit}>
              <div className="pm-form-group">
                <label>Patient Name</label>
                <input
                  type="text"
                  value={formData.patient}
                  onChange={(e) => setFormData({ ...formData, patient: e.target.value })}
                  required
                />
              </div>
              <div className="pm-form-group">
                <label>Medication</label>
                <input
                  type="text"
                  value={formData.medication}
                  onChange={(e) => setFormData({ ...formData, medication: e.target.value })}
                  required
                />
              </div>
              <div className="pm-form-group">
                <label>Dosage</label>
                <input
                  type="text"
                  value={formData.dosage}
                  onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
                  required
                />
              </div>
              <div className="pm-form-group">
                <label>Instructions</label>
                <textarea
                  value={formData.instructions}
                  onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                  required
                ></textarea>
              </div>
              <div className="pm-form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
              <div className="pm-modal-actions">
                <button type="submit" className="pm-submit-btn">Save Prescription</button>
                <button type="button" className="pm-cancel-btn" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}