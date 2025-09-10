import { Link, useNavigate } from "react-router-dom";
import "./styles.css"; // Import styles

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to StudentForm page on Sign In
    navigate("/register");
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
        <h2 className="title">Welcome Back</h2>
        <p className="subtitle">Sign in to continue your career journey</p>

        <form onSubmit={handleSubmit}>
          <label className="label">Email</label>
          <input type="email" placeholder="Enter your email" className="input" />

          <label className="label">Password</label>
          <input type="password" placeholder="Enter your password" className="input" />

          <button type="submit" className="btn">Sign In</button>
        </form>

        <p className="link">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>

        <p className="footer">Find your path to success</p>
      </div>
    </div>
  );
}

export default Login;
