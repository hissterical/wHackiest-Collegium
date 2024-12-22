import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  // State for dynamic data
  const [notifications, setNotifications] = useState([]);
  const [highlights, setHighlights] = useState({});
  const [quickLinks] = useState([
    { title: "Knowledge Marketplace", path: "/expertise-marketplace" },
    { title: "Equipment Marketplace", path: "/equipment-marketplace" },
    { title: "Today's Timetable", path: "/calendar" },
    { title: "Upcoming Events", path: "/event-management" },
  ]);

  // Mock API call to fetch data
  useEffect(() => {
    const fetchData = async () => {
      const mockNotifications = [
        "Event registration confirmed for Hackathon.",
        "Payment received for your listed book.",
        "New message from Alex regarding tutoring.",
      ];
      const mockHighlights = {
        recentTransactions: "₹1500 spent on equipment.",
        activitySummary: "3 sessions booked, 2 items sold.",
      };

      // Simulating API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setNotifications(mockNotifications);
      setHighlights(mockHighlights);
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <header className="top-nav">
        <div className="profile-avatar" onClick={() => navigate("/profile")}>
          <img src="https://via.placeholder.com/40" alt="Profile" />
        </div>
        <div className="notifications">
          <span className="notification-icon">🔔</span>
          <span className="notification-badge">{notifications.length}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Quick Links Section */}
        <section className="quick-links">
          <h2>Quick Links</h2>
          {quickLinks.map((link, index) => (
            <div
              key={index}
              className="card"
              onClick={() => navigate(link.path)}
            >
              {link.title}
            </div>
          ))}
        </section>

        {/* Highlights and Insights */}
        <section className="highlights">
          <h2>Highlights</h2>
          <p>Recent Transactions: {highlights.recentTransactions}</p>
          <p>Activity Summary: {highlights.activitySummary}</p>
        </section>
      </main>

      {/* Bottom Navigation Bar */}
      <footer className="bottom-nav">
        <button onClick={() => navigate("/dashboard")}>🏠 Dashboard</button>
        <button onClick={() => navigate("/expertise-marketplace")}>
          📦 Knowledge Marketplace
        </button>
        <button onClick={() => navigate("/calendar")}>📅 Calendar</button>
        <button onClick={() => navigate("/event-management")}>
          💬 Events
        </button>
      </footer>
    </div>
  );
}

export default Dashboard;
