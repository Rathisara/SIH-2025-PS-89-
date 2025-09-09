

// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./signup";
import Login from "./login";
import "./styles.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} /> {/* Default to login */}
      </Routes>
    </Router>
  );
}

export default App;

