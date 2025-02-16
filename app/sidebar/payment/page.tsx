"use client";

import React, { useState } from "react";
import styles from "./payment.module.css";

export default function PaymentPage() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setPaymentStatus("");

    // Simulate payment processing (replace this with your actual payment integration)
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentStatus("Payment Successful! Thank you for your payment.");
      // Reset form if needed:
      setCardNumber("");
      setExpiry("");
      setCvc("");
      setAmount("");
    }, 2000);
  };

  return (
    <div className={styles.paymentPage}>
      <header className={styles.header}>
        <h1>Secure Payment</h1>
        <p>Process your payments for health tracking services securely.</p>
      </header>

      <section className={styles.paymentFormSection}>
        <form onSubmit={handleSubmit} className={styles.paymentForm}>
          <div className={styles.formGroup}>
            <label htmlFor="amount">Amount (USD):</label>
            <input
              type="number"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="expiry">Expiry Date:</label>
              <input
                type="text"
                id="expiry"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="cvc">CVC:</label>
              <input
                type="text"
                id="cvc"
                placeholder="123"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit" disabled={isProcessing}>
            {isProcessing ? "Processing..." : "Pay Now"}
          </button>
        </form>
        {paymentStatus && (
          <div className={styles.paymentStatus}>
            <p>{paymentStatus}</p>
          </div>
        )}
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 YabaTech Medical Center</p>
      </footer>
    </div>
  );
}