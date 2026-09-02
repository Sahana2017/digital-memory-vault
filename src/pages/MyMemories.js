import React from "react";
import { Link } from "react-router-dom";
import "../styles/MyMemories.css";

function MyMemories() {
  const memories = [
    {
      id: 1,
      title: "Trip to Coorg",
      category: "Photo",
      date: "15-07-2026",
    },
    {
      id: 2,
      title: "Birthday Celebration",
      category: "Photo",
      date: "10-07-2026",
    },
  ];

  return (
    <div className="my-memories">
      <h1>My Memories</h1>

      <div className="memories-container">
        {memories.map((memory) => (
          <div className="memory-card" key={memory.id}>
            <div className="memory-image">
              <span>Memory</span>
            </div>

            <h2>{memory.title}</h2>

            <p>
              Category: {memory.category}
            </p>

            <p>
              Date: {memory.date}
            </p>

            <div className="memory-actions">
              <Link to="/viewmemory">
                <button className="view-btn">View</button>
              </Link>

              <Link to="/editmemory">
                <button className="edit-btn">Edit</button>
              </Link>

              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cancel-container">
        <Link to="/dashboard">
          <button className="cancel-btn">Cancel</button>
        </Link>
      </div>
    </div>
  );
}

export default MyMemories;