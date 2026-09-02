import React from "react";
import "../styles/EditProfile.css";
import { Link } from "react-router-dom";

function EditProfile() {
  return (
    <div className="edit-profile-page">

      {/* Back */}
      <Link to="/profile" className="edit-back">
        ← Back to Profile
      </Link>

      <div className="edit-profile-card">

        <h2>Edit Profile</h2>

        <form>

          <label>Name</label>
          <input
            type="text"
            defaultValue="Sahana"
            placeholder="Enter your name"
          />

          <label>Email</label>
          <input
            type="email"
            defaultValue="sahana@gmail.com"
            placeholder="Enter your email"
          />

          <label>Phone</label>
          <input
            type="tel"
            defaultValue="9876543210"
            placeholder="Enter your phone number"
          />

          <div className="edit-profile-buttons">

            <button type="submit" className="save-profile-btn">
              Save Changes
            </button>

            <Link to="/profile">
              <button type="button" className="cancel-edit-btn">
                Cancel
              </button>
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditProfile;