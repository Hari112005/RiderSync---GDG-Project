import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaMapMarkerAlt, FaCar, FaUserShield } from "react-icons/fa";
import RideConfirmation from "./RideConfirmation";
import { useNavigate } from "react-router-dom";
export default function RiderPage() {
  const [availableVehicles, setAvailableVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const naviagte = useNavigate();
  const dummyVehicles = [
    { id: 1, type: "Sedan", number: "AB1234", time: "5 mins", distance: "2 km", fare: "$10", driver: "John Doe", rating: "4.8", safety: "5.0" },
    { id: 2, type: "SUV", number: "XY5678", time: "7 mins", distance: "3 km", fare: "$15", driver: "Emma Smith", rating: "4.7", safety: "4.9" },
    { id: 3, type: "Hatchback", number: "MN3456", time: "4 mins", distance: "1.5 km", fare: "$8", driver: "Alex Brown", rating: "4.6", safety: "4.8" },
  ];

  return (
    <div className="container mt-4">
      {/* Header Section */}
      <h2 className="text-primary fw-bold">Hello, User! Ready to Ride?</h2>
      <p className="text-muted">Enter your pickup and drop-off locations to find a ride.</p>

      {/* Input Section */}
      <div className="card shadow-sm p-4 mb-4">
        <div className="mb-3">
          <label className="form-label fw-bold"><FaMapMarkerAlt className="text-danger me-2" />Pickup Location</label>
          <input type="text" className="form-control" placeholder="Enter your pickup location" />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold"><FaMapMarkerAlt className="text-success me-2" />Drop-off Location</label>
          <input type="text" className="form-control" placeholder="Enter your destination" />
        </div>
        <button className="btn btn-primary w-100 fw-bold" onClick={() => setAvailableVehicles(dummyVehicles)}>Find a Ride</button>
      </div>

      {/* Available Vehicles Section */}
      {availableVehicles.length > 0 && (
        <div className="card shadow-sm p-4 mb-4">
          <h4 className="text-center text-primary">Available Vehicles</h4>
          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>Vehicle Type</th>
                <th>Number</th>
                <th>Pick-up Time</th>
                <th>Distance</th>
                <th>Fare</th>
              </tr>
            </thead>
            <tbody>
              {availableVehicles.map(vehicle => (
                <tr 
                  key={vehicle.id} 
                  onClick={() => setSelectedVehicle(vehicle)} 
                  style={{ cursor: "pointer", backgroundColor: selectedVehicle?.id === vehicle.id ? "#f8d7da" : "" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f1f1f1"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = selectedVehicle?.id === vehicle.id ? "#f8d7da" : ""}
                >
                  <td>{vehicle.type}</td>
                  <td>{vehicle.number}</td>
                  <td>{vehicle.time}</td>
                  <td>{vehicle.distance}</td>
                  <td>{vehicle.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Vehicle Details Popup */}
      {selectedVehicle && (
        <div className="card shadow-lg p-4 mt-4 position-fixed top-50 start-50 translate-middle bg-white" style={{ width: "450px", zIndex: "1000" }}>
          <h4 className="text-center text-primary">Vehicle Details</h4>
          <p><strong>Vehicle:</strong> {selectedVehicle.type} ({selectedVehicle.number})</p>
          <p><strong>Driver:</strong> {selectedVehicle.driver} <FaUserShield className="text-success ms-2" /></p>
          <p><strong>Pickup Time:</strong> {selectedVehicle.time}</p>
          <p><strong>Distance:</strong> {selectedVehicle.distance}</p>
          <p><strong>Fare:</strong> {selectedVehicle.fare}</p>
          <p><strong>Rating:</strong> ⭐ {selectedVehicle.rating}</p>
          <p><strong>Safety Rating:</strong> ⭐ {selectedVehicle.safety}</p>
          <button className="btn btn-success w-100 mt-3 fw-bold" onClick={(e)=>{naviagte('/rider-confirmation/payment')}}>Book Ride</button>
          <button className="btn btn-outline-secondary w-100 mt-2" onClick={() => setSelectedVehicle(null)}>Close</button>
        </div>
      )}
    </div>
  );
}
