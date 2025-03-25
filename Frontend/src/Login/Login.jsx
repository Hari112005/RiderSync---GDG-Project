import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { registerUser, loginUser } from "../../../Backend/src/utils/api.js";
import { useNavigate } from "react-router-dom";
import Loading from "../Loader/Loading.jsx";
export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [invalid,setInvalid]=useState(false);
  const [loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "rider",
  });

  const navigate = useNavigate();
  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(()=>{
    if(isSignUp){
      navigate('/register')
    }
    else{
      navigate('/login')
    }
  },[isSignUp]);

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email: formData.email, password: formData.password });
      setLoading(true)
      localStorage.setItem("token", response);
      navigate("/dashboard"); // Redirect to dashboard
    } catch (error) {
      setLoading(false)
      console.error("Login Error:", error);
      setInvalid(true);
      
    }
  };

  // Handle Registration
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      setLoading(true)
      setIsSignUp(false); // Switch to Login Page
      setLoading(false)
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Error registering user!");
    }
  };

  return (
    <>

        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
          <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>
            <h2 className="text-center mb-3 text-primary">
              {isSignUp ? "Sign Up" : "Login"} to RideSync
            </h2>
  
            <form onSubmit={isSignUp ? handleRegister : handleLogin}>
              {isSignUp && (
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
  
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
  
              {isSignUp && (
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
  
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
  
              <button
  type="submit"
  className="btn btn-primary w-100 mb-2"
  onClick={(e) => {
    setLoading(true);
  }}
>
  { loading ? (
    <>
      <div className="spinner-border spinner-border-sm text-white me-2" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  ) : (
    isSignUp ? "Sign Up" : "Login"
  )}
</button>


  
              {invalid && <p className="text-center text-danger">Invalid Email or Password</p>}
              {!isSignUp && (
                <a href="#" className="text-primary d-block mb-2 text-center">
                  Forgot Password?
                </a>
              )}
            </form>
  
            <div className="text-center mt-3">
              <span>
                {isSignUp ? "Already have an account?" : "Don't have an account?"}
                <button className="btn btn-link text-primary p-0" onClick={() => setIsSignUp(!isSignUp)}>
                  {isSignUp ? "Login here" : "Sign up here"}
                </button>
              </span>
            </div>
          </div>
        </div>
      
    </>
  );
}