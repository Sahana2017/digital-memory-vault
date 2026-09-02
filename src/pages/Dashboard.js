import React from "react";
import "../styles/Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>💜 Memory Vault</h2>

        <ul>
          <li>🏠 Dashboard</li>
          <li>📷 Photos</li>
          <li>📝 Notes</li>
          <li>📄 Documents</li>
          <li>🎥 Videos</li>
          <li>⚙️ Settings</li>
          <li>🚪 Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="mainContent">

        <div className="header">
          <h1>Welcome Back 👋</h1>
          <p>Your memories are safe and organized.</p>
          <Link to="/addmemory">
             <button className="add-btn">+ Add Memory</button>
        </Link>
        <Link to="/mymemories">
            <button className="memory-btn">My Memories</button>
        </Link>
        <Link to="/profile">
             <button className="profile-btn">Profile</button>
        </Link>
        <Link to="/">
            <button className="logout-btn">Logout</button>
        </Link>
        </div>

        {/* Cards */}
        <div className="cards">

          <div className="card">
            <h2>📷 Photos</h2>
            <h3>120</h3>
            <p>Total Photos</p>
          </div>

          <div className="card">
            <h2>📝 Notes</h2>
            <h3>35</h3>
            <p>Saved Notes</p>
          </div>

          <div className="card">
            <h2>📄 Documents</h2>
            <h3>18</h3>
            <p>Uploaded Files</p>
          </div>

          <div className="card">
            <h2>🎥 Videos</h2>
            <h3>24</h3>
            <p>Stored Videos</p>
          </div>

        </div>

        {/* Recent Memories */}
        <div className="recent">

          <h2>✨ Recent Memories</h2>

          <div className="memoryBox">
            <p>🌸 Trip to Coorg</p>
            <span>15 July 2026</span>
          </div>

          <div className="memoryBox">
            <p>🎂 Birthday Celebration</p>
            <span>10 July 2026</span>
          </div>

          <div className="memoryBox">
            <p>🎓 College Farewell</p>
            <span>05 July 2026</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;