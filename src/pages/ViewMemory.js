import React from "react";
import { Link } from "react-router-dom";
import "../styles/ViewMemory.css";

function ViewMemory() {
  return (
    <div className="view-memory">
      <div className="memory-card">

        <img
          src="https://via.placeholder.com/500x300"
          alt="Memory"
        />

        <h2>Trip to Coorg</h2>

        <p>
          <strong>Description:</strong> Beautiful trip with friends. We enjoyed nature and captured lots of memories.
        </p>

        <p>
          <strong>Category:</strong> Photo
        </p>

        <p>
          <strong>Date:</strong> 15-07-2026
        </p>

        <Link to="/mymemories">
          <button className="back-btn">
            Cancel
          </button>
        </Link>

      </div>
    </div>
  );
}

export default ViewMemory;