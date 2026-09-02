import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();

  const googleRegister = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        console.log(res.data);

        // Navigate to dashboard after successful Google login
        navigate("/dashboard");
      } catch (err) {
        console.log(err);
      }
    },
    onError: () => console.log("Google Register Failed"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

 return (
  <div className="registerPage">
    <div className="registerCard">
      <h1>Create Account</h1>

      <p>Join Digital Memory Vault and keep your memories safe.</p>

      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />
        </div>

        <div className="inputBox">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="inputBox">
          <label>Password</label>
          <input type="password" placeholder="Create a password" />
        </div>

        <div className="inputBox">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />
        </div>

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>

      <div className="links">
        <button
          type="button"
          className="google-btn"
          onClick={() => googleRegister()}
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="google-icon"
          />
          Sign up with Google
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  </div>
);
}
export default Register;