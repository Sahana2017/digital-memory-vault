import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddMemory.css";

function AddMemory() {
  const navigate = useNavigate();

  return (
    <div className="add-memory">
      <h2>Add Memory</h2>

      <form>
        {/* Memory Title */}
        <label>Memory Title</label>
        <input
          type="text"
          placeholder="Enter memory title"
        />

        {/* Description */}
        <label>Description</label>
        <textarea
          placeholder="Write about your memory"
        ></textarea>

        {/* Category */}
        <label>Category</label>
        <select>
          <option value="">Select Category</option>
          <option value="Photo">Photo</option>
          <option value="Video">Video</option>
          <option value="Note">Note</option>
          <option value="Document">Document</option>
        </select>

        {/* Date */}
        <label>Date</label>
        <input type="date" />

        {/* Upload File */}
        <label>Upload File</label>
        <input type="file" />

        {/* Buttons */}
        <div className="buttons">
          <button type="submit">Save</button>

          <button
            type="button"
            onClick={() => navigate("/dashboard")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMemory;