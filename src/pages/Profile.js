import React from "react";
import "../styles/Profile.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Profile() {
  return (
    <div className="profile-page">



      {/* Profile Card */}
      <div className="profile-card">

        <div className="profile-image-wrapper">
          <img
            src={logo}
            alt="Profile"
            className="profile-img"
          />
        </div>

        <h2>Sahana</h2>

        <div className="profile-info">
          <p>
            <strong>Email:</strong> sahana@gmail.com
          </p>

          <p>
            <strong>Phone:</strong> 1234567890
          </p>
        </div>

        <div className="profile-buttons">

          <Link to="/editprofile">
            <button className="edit-profile-btn">
              Edit Profile
            </button>
          </Link>

          <Link to="/changepassword">
            <button className="change-password-btn">
              Change Password
            </button>
          </Link>
          <Link to="/dashboard">
  <button className="cancel-profile-btn">
    Cancel
  </button>
</Link>

        </div>

      </div>

    </div>
  );
}

export default Profile;