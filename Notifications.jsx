import { useLocation } from "react-router-dom";

function Notifications() {
  const location = useLocation();
  const notifications = location.state?.notifications || [];

  return (
    <div className="notifications-page">
      <h2>🔔 Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications yet.</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notifications;
