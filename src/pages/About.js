import React from "react";
import "../styles/About.css";
import logo from "../assets/logo.png";

function About() {
  return (
    <div className="about-page">

      {/* ================= RIGHT SIDE WAVE ================= */}

      <div className="about-wave">
        <svg
          viewBox="0 0 500 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M500 0
               L500 800
               L0 800
               C120 700 180 600 250 480
               C330 340 390 170 500 90
               Z"
            fill="#d9d0ff"
          />

          <path
            d="M500 100
               L500 800
               L120 800
               C220 670 270 540 330 420
               C390 290 440 170 500 120
               Z"
            fill="#b59af8"
          />

          <path
            d="M500 150
               L500 800
               L210 800
               C290 660 350 530 400 410
               C450 290 475 210 500 170
               Z"
            fill="#8d6ce0"
          />

          <path
            d="M500 250
               L500 800
               L330 800
               C390 650 430 510 460 400
               C480 320 490 270 500 230
               Z"
            fill="#6377e8"
          />

          <path
            d="M80 700
               C180 630 260 500 330 380
               C400 260 450 160 490 90"
            fill="none"
            stroke="white"
            strokeWidth="3"
            opacity="0.8"
          />
        </svg>
      </div>


      {/* ================= NAVBAR ================= */}

      <header className="about-navbar">

        <div className="about-logo-section">
          <img
            src={logo}
            alt="Digital Memory Vault"
            className="about-logo"
          />

          <h2>Digital Memory Vault</h2>
        </div>


        <div className="about-nav-links">

          <a href="/">Home</a>

          <a href="/features">Features</a>

          <a href="/about" className="active">
            About
          </a>

          <a href="/contact">Contact</a>

        </div>


        <div className="about-nav-buttons">

          <a href="/login" className="about-signin">
            Sign In
          </a>

          <a href="/register" className="about-register">
            Register
          </a>

        </div>

      </header>


      {/* ================= ABOUT CONTENT ================= */}

      <main className="about-content">

        <div className="about-text">

          <h1>
            About 
          </h1>

          <p className="about-intro">
            Your personal space to store, organize and protect
            the digital memories that matter most.
          </p>

          <p>
            Digital Memory Vault brings your photos, videos,
            notes and important documents together in one
            simple and organized place.
          </p>

          <p>
            Instead of searching through different folders
            and applications, you can keep your important
            memories safely organized inside your own
            digital vault.
          </p>


<div className="about-highlights">

  <div className="about-highlight">
    <div className="about-highlight-icon">🔐</div>
    <div>
      <h3>Private & Secure</h3>
      <p>
        Your personal space to store, organize and protect
        the digital memories that matter most.
      </p>
    </div>
  </div>

  <div className="about-highlight">
    <div className="about-highlight-icon">📁</div>
    <div>
      <h3>Everything in One Place</h3>
      <p>
        Digital Memory Vault brings your photos, videos,
        notes and important documents together in one
        simple and organized place.
      </p>
    </div>
  </div>

  <div className="about-highlight">
    <div className="about-highlight-icon">✨</div>
    <div>
      <h3>Simple & Organized</h3>
      <p>
        Instead of searching through different folders and
        applications, you can keep your important memories
        safely organized inside your own digital vault.
      </p>
    </div>
  </div>

</div>

        </div>

      </main>

    </div>
  );
}

export default About;