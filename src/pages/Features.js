import React from "react";
import "../styles/Features.css";
import logo from "../assets/logo.png";

function Features() {
  return (
    <div className="features-page">

      {/* ================= RIGHT SIDE WAVE ================= */}

      <div className="features-contact-wave">
        <svg
          viewBox="0 0 500 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* Light purple background */}
          <path
            d="M500 0
               L500 800
               L0 800
               C120 700 180 600 250 480
               C330 340 390 170 500 90
               Z"
            fill="#d9d0ff"
          />

          {/* Lavender wave */}
          <path
            d="M500 100
               L500 800
               L120 800
               C220 670 270 540 330 420
               C390 290 440 170 500 120
               Z"
            fill="#b59af8"
          />

          {/* Main purple wave */}
          <path
            d="M500 150
               L500 800
               L210 800
               C290 660 350 530 400 410
               C450 290 475 210 500 170
               Z"
            fill="#8d6ce0"
          />

          {/* Blue wave */}
          <path
            d="M500 250
               L500 800
               L330 800
               C390 650 430 510 460 400
               C480 320 490 270 500 230
               Z"
            fill="#6377e8"
          />

          {/* White curved line */}
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

      <header className="features-navbar">

        {/* Logo */}
        <div className="features-logo-section">

          <img
            src={logo}
            alt="Digital Memory Vault"
            className="features-logo"
          />

          <h2>Digital Memory Vault</h2>

        </div>


        {/* Navigation Links */}
        <div className="features-nav-links">

          <a href="/">
            Home
          </a>

          <a
            href="/features"
            className="active"
          >
            Features
          </a>

          <a href="/about">
            About
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>


        {/* Sign In + Register */}
        <div className="features-nav-buttons">

          <a
            href="/login"
            className="features-signin"
          >
            Sign In
          </a>

          <a
            href="/register"
            className="features-register"
          >
            Register
          </a>

        </div>

      </header>


      {/* ================= FEATURES CONTENT ================= */}

      <main className="features-content">

        <h1>Features</h1>

        <p className="features-intro">
          Everything you need to securely organize your digital memories.
        </p>

        <div className="features-line"></div>


        {/* ================= FEATURE GRID ================= */}

        <div className="features-grid">


          {/* Photos */}
          <div className="feature-card">

            <div className="feature-icon">
              <span>▧</span>
            </div>

            <h2>Photos</h2>

            <p>
              Store and manage your memorable
              <br />
              photos securely in one place.
            </p>

          </div>


          {/* Videos */}
          <div className="feature-card">

            <div className="feature-icon">
              <span>▶</span>
            </div>

            <h2>Videos</h2>

            <p>
              Keep your important videos
              <br />
              organized inside your digital vault.
            </p>

          </div>


          {/* Notes */}
          <div className="feature-card">

            <div className="feature-icon">
              <span>☷</span>
            </div>

            <h2>Notes</h2>

            <p>
              Save personal notes and important
              <br />
              information safely.
            </p>

          </div>


          {/* Documents */}
          <div className="feature-card">

            <div className="feature-icon">
              <span>▤</span>
            </div>

            <h2>Documents</h2>

            <p>
              Store important documents and
              <br />
              access them whenever you need.
            </p>

          </div>


          {/* Secure Storage */}
          <div className="feature-card">

            <div className="feature-icon">
              <span>♜</span>
            </div>

            <h2>Secure Storage</h2>

            <p>
              Your memories are protected with
              <br />
              secure authentication.
            </p>

          </div>


          {/* Organized Memories */}
          <div className="feature-card">

            <div className="feature-icon">
              <span>▰</span>
            </div>

            <h2>Organized Memories</h2>

            <p>
              Keep your digital life organized in
              <br />
              one private vault.
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Features;