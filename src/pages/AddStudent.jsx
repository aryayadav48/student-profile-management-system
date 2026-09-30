import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { StudentContext } from "../context/StudentContext";

import "./AddStudent.css";

function AddStudent() {
  const navigate = useNavigate();

  const { addStudent } = useContext(StudentContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    course: "",
    city: "",
    image: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.age ||
      !formData.course ||
      !formData.city
    ) {
      setError("Please fill all fields.");
      return;
    }

    addStudent({
      ...formData,
      id: Date.now(),
    });

    setError("");

    alert("Student added successfully!");

    navigate("/students");
  }

  return (
    <div className="add-student-page">
      <div className="add-student-card">

        <h1>Add Student</h1>

        {error && (
          <p className="form-error">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Age</label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                required
              />
            </div>

            <div className="form-group">
              <label>Course</label>

              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select course</option>
                <option value="BCA">BCA</option>
                <option value="BBA">BBA</option>
                <option value="B.Tech">B.Tech</option>
                <option value="MCA">MCA</option>
              </select>
            </div>

          </div>

          <div className="form-group">
            <label>City</label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
              required
            />
          </div>

          <div className="form-group">
            <label>Profile Image (optional)</label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Optional: paste a profile image URL"
            />
          </div>

          <button type="submit">
            Add Student
          </button>

        </form>

      </div>
    </div>
  );
}

export default AddStudent;