import { Link, useNavigate } from "react-router-dom";
import "./styles.css"; // Import styles

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // ✅ Normally, you would handle form validation & save user data here

    // After signup success → go to Login page
    navigate("/login");
  };

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
        <p className="subtitle">
          Create an account to discover your ideal career path
        </p>

        <form onSubmit={handleSignup}>
          <label className="label">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="input"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input"
            required
          />

          <button type="submit" className="btn">
            Create Account
          </button>
        </form>

        <p className="link">
          Already have an account? <Link to="/">Sign in</Link>
        </p>

        <p className="footer">Find your path to success</p>
      </div>
    </div>
  );
}

export default Signup;
