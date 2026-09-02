import React from "react";
import "../styles/EditMemory.css";
import { useNavigate } from "react-router-dom";

function EditMemory() {
  const navigate = useNavigate();

  return (
    <div className="edit-memory">
      <h2>Edit Memory</h2>

      <form>
        <label>Memory Title</label>
        <input
          type="text"
          defaultValue="Trip to Coorg"
        />

        <label>Description</label>
        <textarea defaultValue="Beautiful trip with friends"></textarea>

        <label>Category</label>
        <select defaultValue="Photo">
          <option>Photo</option>
          <option>Video</option>
          <option>Note</option>
          <option>Document</option>
        </select>

        <label>Date</label>
        <input
          type="date"
          defaultValue="2026-07-15"
        />

        <label>Upload New File</label>
        <input type="file" />

        <div className="buttons">
          <button type="submit">
            Update
          </button>

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

export default EditMemory;