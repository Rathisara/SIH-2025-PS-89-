import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultMale from "../male.png";
import defaultFemale from "../female.png";
import QuizSelector from "./QuizSelector"; // Import QuizSelector
import "../App.css"; // or Dashboard.css

function Dashboard({ student }) {
  const [showDetails, setShowDetails] = useState(false);
  const [active, setActive] = useState("domains");
  const navigate = useNavigate();

  if (!student) return <p>No student details available.</p>;

  const profilePic =
    student.profilePic || (student.gender === "Female" ? defaultFemale : defaultMale);

  const menus = [
    "Interested Domains",
    "Mapping Results to Courses",
    "Course Outcomes",
    "College Directory",
    "College Location Finder",
    "College Detail Page",
    "Saved Colleges",
    "Exams Info",
    "Awareness Section",
    "Poster / Infographic Gallery",
  ];

  const notifications = [
  "📌 Your profile has been updated successfully.",
  "📌 New exam results are available.",
  "📌 College admission deadline is approaching soon.",
];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>📋 Menu</h2>
        <ul>
          {menus.map((menu, idx) => (
            <li
              key={idx}
              onClick={() => setActive(menu)}
              className={active === menu ? "active" : ""}
            >
              {menu}
            </li>
          ))}
        </ul>
        <button className="logout-btn" onClick={() => navigate("/")}>
          🚪 Logout
        </button>
      </div>

      {/* Main Section */}
      <div className="dashboard-main">
        <div className="profile-section">
          <div className="top-right">
            <div
              className="profile-info"
              onClick={() => setShowDetails(!showDetails)}
            >
              <img src={profilePic} alt="Profile" className="profile-pic" />
              <span className="profile-name">{student.name}</span>
            </div>

            <div className="tooltip">
              <button
                className="icon-btn notify"
                onClick={() => navigate("/notifications")}
              >
                🔔
                {notifications.length > 0 && (
                  <span className="badge">{notifications.length}</span>
                )}
              </button>
              <span className="tooltip-text">Notifications</span>
            </div>
          </div>
        </div>

        {/* Student details toggle */}
        {showDetails && (
          <div className="student-card profile-details">
            <div className="profile-header">
              <div className="tooltip">
                <button className="icon-btn">⚙️</button>
                <span className="tooltip-text">Settings</span>
              </div>

              <div className="tooltip">
                <button
                  className="icon-btn edit"
                  onClick={() => navigate("/edit")}
                >
                  ✏️
                </button>
                <span className="tooltip-text">Edit</span>
              </div>
            </div>

            <p>
              <b>Email:</b> {student.email}
            </p>
            <p>
              <b>Phone:</b> {student.phone}
            </p>
            <p>
              <b>Address:</b> {student.address}
            </p>
            <p>
              <b>Age:</b> {student.age}
            </p>
            <p>
              <b>Gender:</b> {student.gender}
            </p>
            <p>
              <b>School:</b> {student.school}
            </p>
            <p>
              <b>Group:</b> {student.group}
            </p>
          </div>
        )}

        {/* Quiz Section */}
<div className="flex justify-center items-center p-6">
  <div className="bg-card text-card-foreground rounded-xl shadow-card p-6 w-full max-w-2xl hover:shadow-card-hover transition-smooth">
    <h2 className="text-2xl font-bold text-accent text-center mb-6">
      Take a Quiz 🎯
    </h2>
    <QuizSelector />
  </div>
</div>

</div>
    </div>
  );
}
export default Dashboard;
