import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust path as needed
import Dashboard from "./screens/Dashboard";
import ExpertiseMarketplace from "./screens/ExpertiseMarketplace";
import EquipmentMarketplace from "./screens/EquipmentMarketplace";
import EventManagement from "./screens/EventManagement";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Calendar from "./screens/Calendar"; // Import Calendar

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expertise-marketplace" element={<ExpertiseMarketplace />} />
          <Route path="/equipment-marketplace" element={<EquipmentMarketplace />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/event-management" element={<EventManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
