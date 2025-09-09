// Signup.jsx
import { Link } from "react-router-dom";
import "./styles.css"; // Import styles

function Signup() {
  return (
    <div className="container">
      <div className="card">
        {/* Logo + Title */}
        <div className="logo-section">
          <div className="logo-icon">📘</div>
          <h1 className="logo-text">CareerCompass</h1>
          <p className="logo-sub">Find your perfect path</p>
        </div>

        {/* Form */}
        <h2 className="title">Get Started</h2>
        <p className="subtitle">Create an account to discover your ideal career path</p>

        <form>
          <label className="label">Full Name</label>
          <input type="text" placeholder="Enter your full name" className="input" />

          <label className="label">Email</label>
          <input type="email" placeholder="Enter your email" className="input" />

          <label className="label">Password</label>
          <input type="password" placeholder="Enter your password" className="input" />

          <button type="submit" className="btn">Create Account</button>
        </form>

        <p className="link">
          Already have an account?{" "}
          <Link to="/login">Sign in</Link>
        </p>

            <p className="footer">Find your path to success</p>
      </div>
    </div>
  );
}

export default Signup;
