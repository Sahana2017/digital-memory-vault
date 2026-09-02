import React from "react";
import "../styles/Contact.css";
import logo from "../assets/logo.png";

function Contact() {
  return (
    <div className="contact-page">

      {/* ================= RIGHT SIDE WAVE ================= */}
      <div className="contact-wave">
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
      <header className="contact-navbar">

        <div className="contact-logo-section">
          <img
            src={logo}
            alt="Digital Memory Vault"
            className="contact-logo"
          />

          <h2>Digital Memory Vault</h2>
        </div>


        <div className="contact-nav-links">

          <a href="/">Home</a>

          <a href="/features">Features</a>

          <a href="/about">About</a>

          <a href="/contact" className="active">
            Contact
          </a>

        </div>


        <div className="contact-nav-buttons">

          <a href="/login" className="contact-signin">
            Sign In
          </a>

          <a href="/register" className="contact-register">
            Register
          </a>

        </div>

      </header>


      {/* ================= CONTACT CONTENT ================= */}

      <main className="contact-content">

        <div className="contact-left">

          <h1>
            Get in <span>Touch</span>
          </h1>

          <p className="contact-intro">
            Have questions, suggestions or feedback?
            We'd love to hear from you.
          </p>


          {/* CONTACT CARDS */}

          <div className="contact-cards">

            <div className="contact-card">

              <div className="contact-icon">
                ✉
              </div>

              <div>
                <h3>Email Us</h3>
                <p>
                  digitalmemoryvault@gmail.com
                </p>
              </div>

            </div>


            <div className="contact-card">

              <div className="contact-icon">
                💬
              </div>

              <div>
                <h3>We're Here to Help</h3>
                <p>
                  Feel free to reach out with any
                  questions or feedback.
                </p>
              </div>

            </div>


            <div className="contact-card">

              <div className="contact-icon">
                🔐
              </div>

              <div>
                <h3>Your Privacy Matters</h3>
                <p>
                  We value your privacy and keep
                  your information secure.
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= CONTACT FORM ================= */}

        <div className="contact-form-box">

          <h2>Send us a Message</h2>

          <div className="contact-input-group">

            <label>Your Name</label>

            <input
              type="text"
              placeholder="Enter your name"
            />

          </div>


          <div className="contact-input-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>


          <div className="contact-input-group">

            <label>Message</label>

            <textarea
              rows="5"
              placeholder="Write your message..."
            ></textarea>

          </div>


          <button className="contact-send-btn">
            Send Message
          </button>

        </div>

      </main>

    </div>
  );
}

export default Contact;