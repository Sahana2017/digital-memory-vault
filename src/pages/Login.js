import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "../styles/Login.css";

function Login() {
  return (
    <div className="loginPage">

      <div className="loginCard">

        <h1>Welcome </h1>

        <p>Sign In access your Digital Memory Vault</p>

        <form>

          <div className="inputBox">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="inputBox">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>
<Link to="/forgot-password" className="forgot-link">
  Forgot Password?
</Link>

<button type="submit" className="login-btn">
  Sign In
</button>

</form>

<div className="links">

<div className="google-btn-container">
  <GoogleLogin
    shape="pill"
    theme="outline"
    size="large"
    width="100%"
    text="signin_with"
    onSuccess={(credentialResponse) => {
      console.log("Google Login Success:", credentialResponse);
    }}
    onError={() => {
      console.log("Google Login Failed");
    }}
  />
</div>

  <p>
    Don't have an account?
    <Link to="/register">Register</Link>
  </p>

</div>


        </div>

      </div>
  )
    }
export default Login;