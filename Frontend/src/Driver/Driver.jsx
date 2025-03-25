import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCar, FaCheckCircle, FaTimesCircle, FaMapMarkerAlt, FaUser, FaDollarSign } from "react-icons/fa";

export default function DriverDashboard() {
  const [requests, setRequests] = useState([
    { id: 1, rider: "Alice Johnson", pickup: "123 Main St", dropoff: "456 Elm St", distance: "2 km", fare: "$10", status: "pending" },
    { id: 2, rider: "Bob Smith", pickup: "789 Oak St", dropoff: "321 Pine St", distance: "5 km", fare: "$15", status: "pending" }
  ]);

  const handleAccept = (id) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: "accepted" } : req));
  };

  const handleReject = (id) => {
    setRequests(requests.filter(req => req.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-primary fw-bold">Welcome, Driver!</h2>
      <p className="text-muted">Manage your ride requests and earnings.</p>

      <div className="card shadow-sm p-4 mb-4">
        <h4 className="text-center text-success">Ride Requests</h4>
        {requests.length === 0 ? (
          <p className="text-center text-muted">No new ride requests.</p>
        ) : (
          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>Rider</th>
                <th>Pickup</th>
                <th>Drop-off</th>
                <th>Distance</th>
                <th>Fare</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(request => (
                <tr key={request.id} className={request.status === "accepted" ? "table-success" : ""}>
                  <td><FaUser className="text-primary me-2" /> {request.rider}</td>
                  <td><FaMapMarkerAlt className="text-danger me-2" /> {request.pickup}</td>
                  <td><FaMapMarkerAlt className="text-success me-2" /> {request.dropoff}</td>
                  <td>{request.distance}</td>
                  <td><FaDollarSign className="text-warning me-2" /> {request.fare}</td>
                  <td>
                    {request.status === "pending" ? (
                      <>
                        <button className="btn btn-success me-2" onClick={() => handleAccept(request.id)}>
                          <FaCheckCircle className="me-1" /> Accept
                        </button>
                        <button className="btn btn-danger" onClick={() => handleReject(request.id)}>
                          <FaTimesCircle className="me-1" /> Reject
                        </button>
                      </>
                    ) : (
                      <span className="text-success fw-bold">Accepted ✅</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
