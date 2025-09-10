import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function StudentForm({ setStudent, initialData }) {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      email: "",
      phone: "",
      address: "",
      age: "",
      gender: "",
      school: "",
      group: "",
      profilePic: "",
    }
  );

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, profilePic: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudent(formData);
    navigate("/dashboard");
  };

  return (
    <div className="form-page">
      <h1>🎓 Student Registration Form</h1>
      <form className="form-card" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label>Gender</label>
        <div className="gender-options">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
        </div>

        <label>School Studied</label>
        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={handleChange}
          required
        />

        <label>Group / Stream</label>
        <select
          name="group"
          value={formData.group}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Group --</option>
          <option value="Science">Science</option>
          <option value="Commerce">Commerce</option>
          <option value="Arts">Arts</option>
          <option value="Vocational">Vocational</option>
        </select>

        <label>Upload Profile Picture</label>
        <div className="upload-container">
          <input
            type="file"
            accept="image/*"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="fileInput" className="upload-btn">
            📷 Choose Profile
          </label>

          {formData.profilePic && (
            <img src={formData.profilePic} alt="Preview" className="preview-img" />
          )}
        </div>

        <button type="submit">
          {initialData ? "Update ✏️" : "Submit ✅"}
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
