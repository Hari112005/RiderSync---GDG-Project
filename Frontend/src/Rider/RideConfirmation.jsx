import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaMapMarkerAlt, FaMoneyBillWave, FaUserShield, FaTimesCircle, FaRoute } from "react-icons/fa";

export default function RideConfirmation() {
  const [rideConfirmed, setRideConfirmed] = useState(false);

  const rideDetails = {
    vehicleType: "Sedan",
    number: "AB1234",
    driver: "John Doe",
    driverPhone: "+1234567890",
    pickupTime: "5 mins",
    distance: "2 km",
    fare: "$10",
    rating: "4.8",
    safety: "5.0",
    pickupLocation: "123 Main St",
    dropoffLocation: "456 Elm St"
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary fw-bold">Your Ride is {rideConfirmed ? "Confirmed!" : "Pending Confirmation"}</h2>
      <p className="text-muted">Track your ride and stay safe.</p>
      
      <div className="card shadow-sm p-4 mb-4">
        <h4 className="text-center text-success">Ride Details</h4>
        <p><strong>Vehicle:</strong> {rideDetails.vehicleType} ({rideDetails.number})</p>
        <p><strong>Driver:</strong> {rideDetails.driver} <FaUserShield className="text-success ms-2" /></p>
        <p><strong>Pickup Location:</strong> <FaMapMarkerAlt className="text-danger me-2" /> {rideDetails.pickupLocation}</p>
        <p><strong>Drop-off Location:</strong> <FaMapMarkerAlt className="text-success me-2" /> {rideDetails.dropoffLocation}</p>
        <p><strong>Estimated Pickup Time:</strong> {rideDetails.pickupTime}</p>
        <p><strong>Distance:</strong> {rideDetails.distance}</p>
        <p><strong>Fare:</strong> <FaMoneyBillWave className="text-warning me-2" /> {rideDetails.fare}</p>
        <p><strong>Driver Rating:</strong> ⭐ {rideDetails.rating}</p>
        <p><strong>Safety Rating:</strong> ⭐ {rideDetails.safety}</p>
      </div>
      
      <div className="d-flex justify-content-between">
        <button className="btn btn-danger w-50 me-2 fw-bold" onClick={() => setRideConfirmed(false)}>
          <FaTimesCircle className="me-2" /> Cancel Ride
        </button>
        <button className="btn btn-success w-50 fw-bold" onClick={() => setRideConfirmed(true)}>
          <FaRoute className="me-2" /> Confirm Ride
        </button>
      </div>

      {rideConfirmed && (
        <div className="card shadow-lg p-4 mt-4 bg-light">
          <h4 className="text-center text-primary">Ride Confirmed 🎉</h4>
          <p className="text-center">Your driver is on the way!</p>
          <div className="text-center">
            <button className="btn btn-primary me-2 fw-bold">
              <FaPhone className="me-2" /> Call Driver
            </button>
            <button className="btn btn-outline-secondary fw-bold">Track Ride</button>
          </div>
        </div>
      )}
    </div>
  );
}
