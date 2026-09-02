import React from "react";
import { Link, NavLink } from "react-router-dom";

import "../styles/Home.css";

import logo from "../assets/logo.png";
import hero from "../assets/hero.png";

function Home() {
  return (
    <div className="home">

      {/* ================= WAVY BACKGROUND ================= */}
      <div className="wave-background">
        <svg
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* Lightest wave */}
          <path
            d="
              M0 610
              C150 570 250 680 400 650
              C550 620 630 500 760 450
              C900 395 1000 440 1110 350
              C1240 245 1320 130 1440 90
              L1440 800
              L0 800 Z
            "
            fill="#eee8ff"
          />

          {/* Light purple wave */}
          <path
            d="
              M0 670
              C150 610 260 720 420 690
              C570 660 650 540 790 480
              C930 420 1030 480 1140 390
              C1270 285 1350 160 1440 110
              L1440 800
              L0 800 Z
            "
            fill="#d4c4ff"
          />

          {/* Main purple wave */}
          <path
            d="
              M0 730
              C150 650 270 750 430 720
              C590 690 680 570 820 510
              C960 450 1060 510 1170 420
              C1290 320 1370 190 1440 150
              L1440 800
              L0 800 Z
            "
            fill="#9d7df3"
          />

          {/* Blue wave */}
          <path
            d="
              M0 800
              C150 700 280 780 440 750
              C600 720 700 620 840 570
              C980 520 1080 580 1190 500
              C1310 410 1380 280 1440 220
              L1440 800
              L0 800 Z
            "
            fill="#6579ef"
          />

          {/* Soft lavender ribbon */}
          <path
            d="
              M0 610
              C150 550 260 660 400 650
              C540 640 630 500 770 450
              C910 400 1010 450 1120 360
              C1240 260 1330 140 1440 90

              L1440 140

              C1330 190 1240 300 1120 400
              C1010 490 910 440 770 490
              C630 540 540 680 400 690
              C260 700 150 590 0 650 Z
            "
            fill="#c5b2fb"
            opacity="0.9"
          />

          {/* White/lavender wave */}
          <path
            d="
              M0 600
              C150 545 260 645 400 635
              C540 625 630 490 770 440
              C910 395 1010 445 1120 350
              C1240 250 1330 130 1440 80

              L1440 115

              C1330 170 1240 290 1120 390
              C1010 485 910 430 770 480
              C630 530 540 670 400 680
              C260 690 150 575 0 635 Z
            "
            fill="#e7deff"
          />

          {/* Thin white curve */}
          <path
            d="
              M500 800
              C650 710 730 610 820 540
              C920 470 1010 445 1100 410
              C1210 360 1300 260 1400 150
            "
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            opacity="0.8"
          />

        </svg>
      </div>


      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="nav-left">

          <div className="logo-section">
            <img
              src={logo}
              alt="Digital Memory Vault Logo"
              className="logo"
            />

            <h2>Digital Memory Vault</h2>
          </div>

          <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/features">
            Features
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
          </nav>

        </div>


        <div className="nav-buttons">

          <Link to="/login" className="SignIn-btn">
            Sign In
          </Link>

          <Link to="/register" className="Register-btn">
            Register
          </Link>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-left">

          <h1 className="hero-title">

            <span className="dark">
              Your
            </span>{" "}

            <span className="gradient">
              Memories,
            </span>

            <br />

            <span className="dark">
              Safely Stored.
            </span>

          </h1>


          <p className="hero-subtitle">
            Securely store your photos, videos, notes, and
            documents in one private digital vault.
          </p>


          <div className="line"></div>

        </div>


        <div className="hero-right">

          <img
            src={hero}
            alt="Digital Memory Vault"
            className="hero-image"
          />

        </div>

      </section>

    </div>
  );
}

export default Home;