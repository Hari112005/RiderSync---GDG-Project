import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const rideHistory = [
    { id: 1, type: "Rider", distance: "12 km", cost: "$15" },
    { id: 2, type: "Driver", distance: "8 km", cost: "$10" },
    { id: 3, type: "Rider", distance: "20 km", cost: "$25" },
    { id: 4, type: "Driver", distance: "5 km", cost: "$7" },
    { id: 5, type: "Rider", distance: "15 km", cost: "$18" },
  ];
  const navigate = useNavigate();
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <a className="navbar-brand fw-bold" href="#">RideSync</a>
        <div className="ms-auto">
          <button className="btn btn-outline-light me-2">Profile</button>
          <button className="btn btn-light">Logout</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center bg-gray py-5">
        <h1 className="fw-bold text-primary">Welcome to RideSync</h1>
        <p className="lead">Find or offer rides easily with a single tap.</p>
        <div className="mt-4">
          <button className="btn btn-success btn-lg me-3" onClick={(e)=>{navigate('/rider')}}>Find a Ride</button>
          <button className="btn btn-warning btn-lg text-white" onClick={(e)=>{navigate('/driver')}}>Offer a Ride</button>
        </div>
      </div>

      {/* Ride History */}
      <div className="container mt-5">
        <h2 className="text-center text-primary mb-3">Your Ride History</h2>
        <table className="table table-bordered table-striped shadow">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Type</th>
              <th>Distance</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {rideHistory.map((ride) => (
              <tr key={ride.id}>
                <td>{ride.id}</td>
                <td>{ride.type}</td>
                <td>{ride.distance}</td>
                <td>{ride.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-3 mt-5">
        <p className="mb-1">RideSync &copy; 2025 | All Rights Reserved</p>
        <div>
          <a href="#" className="text-white me-3">Privacy Policy</a>
          <a href="#" className="text-white me-3">Terms of Service</a>
          <a href="#" className="text-white">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}
