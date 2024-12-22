import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import ExpertiseMarketplace from './screens/ExpertiseMarketplace';
import EquipmentMarketplace from './screens/EquipmentMarketplace';
import Calendar from './screens/Calendar';
import EventManagement from './screens/EventManagement';
import SignUp from './screens/SignUp';
import Profile from './screens/Profile';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expertise-marketplace" element={<ExpertiseMarketplace />} />
        <Route path="/equipment-marketplace" element={<EquipmentMarketplace />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/event-management" element={<EventManagement />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}

export default App;
