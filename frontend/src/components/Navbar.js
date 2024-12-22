import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/expertise-marketplace">Expertise Marketplace</Link>
      <Link to="/equipment-marketplace">Equipment Marketplace</Link>
      <Link to="/calendar">Calendar</Link>
      <Link to="/event-management">Event Management</Link>
    </nav>
  );
};

export default Navbar;
