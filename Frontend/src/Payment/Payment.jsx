import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCreditCard, FaMoneyBillWave, FaPaypal, FaCheckCircle } from "react-icons/fa";

export default function PaymentWindow() {
  const [selectedMethod, setSelectedMethod] = useState("credit_card");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    setPaymentSuccess(true);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary fw-bold text-center">Complete Your Payment</h2>
      <p className="text-muted text-center">Secure and fast payment options.</p>

      <div className="card shadow-sm p-4 mb-4">
        <h4 className="text-center text-success">Choose Payment Method</h4>
        <div className="d-flex justify-content-around mt-3">
          <button
            className={`btn ${selectedMethod === "credit_card" ? "btn-primary" : "btn-outline-primary"} w-25`}
            onClick={() => setSelectedMethod("credit_card")}
          >
            <FaCreditCard className="me-2" /> Credit/Debit Card
          </button>
          <button
            className={`btn ${selectedMethod === "paypal" ? "btn-primary" : "btn-outline-primary"} w-25`}
            onClick={() => setSelectedMethod("paypal")}
          >
            <FaPaypal className="me-2" /> PayPal
          </button>
          <button
            className={`btn ${selectedMethod === "cash" ? "btn-primary" : "btn-outline-primary"} w-25`}
            onClick={() => setSelectedMethod("cash")}
          >
            <FaMoneyBillWave className="me-2" /> Cash
          </button>
        </div>
      </div>

      {selectedMethod === "credit_card" && (
        <div className="card shadow-sm p-4">
          <h5>Enter Card Details</h5>
          <input type="text" className="form-control mb-3" placeholder="Card Number" />
          <div className="d-flex justify-content-between">
            <input type="text" className="form-control w-50 me-2" placeholder="MM/YY" />
            <input type="text" className="form-control w-50" placeholder="CVV" />
          </div>
        </div>
      )}

      {paymentSuccess && (
        <div className="alert alert-success text-center mt-3">
          <FaCheckCircle className="me-2" /> Payment Successful! 🎉
        </div>
      )}

      <div className="text-center mt-4">
        <button className="btn btn-success w-50 fw-bold" onClick={handlePayment}>
          Confirm Payment
        </button>
      </div>
    </div>
  );
}
