import './App.css';
import Login from './Login/Login.jsx';
import Home from './Dashboard/Home.jsx';
import Rider from './Rider/Rider.jsx';
import Driver from './Driver/Driver.jsx';
import RideConfirmation from './Rider/RideConfirmation.jsx';
import Payment from './Payment/Payment.jsx';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to ='/login'/>} />
        <Route path="/login" element={<Login />} />  
        <Route path="/register" element={<Login />} /> 
        <Route path="/dashboard" index element={<Home />} />
        <Route path="/rider" element={<Rider />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/rider-confirmation/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
