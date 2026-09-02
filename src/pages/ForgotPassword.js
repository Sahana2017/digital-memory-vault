import { Link } from "react-router-dom";
import "../styles/ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="forgotPage">
      <div className="forgotCard">
        <h1>Forgot Password</h1>

        <p>Enter your email to receive a password reset link.</p>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <button className="reset-btn">
          Send Reset Link
        </button>

        <Link to="/login" className="back-link">
          ← Back to Login
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;