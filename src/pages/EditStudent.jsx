import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { StudentContext } from "../context/StudentContext";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { students, updateStudent } = useContext(StudentContext);

  const student = students.find(
    (student) => student.id === Number(id)
  );

  const [formData, setFormData] = useState(
    student || {
      name: "",
      email: "",
      phone: "",
      age: "",
      course: "",
      city: "",
      image: "",
    }
  );

  if (!student) {
    return <h2>Student not found</h2>;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    updateStudent(formData);

    alert("Student updated successfully!");

    navigate(`/students/${student.id}`);
  }

  return (
    <div className="add-student-page">
      <div className="add-student-card">

        <h1>Edit Student</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Age</label>

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Course</label>

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select course</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="B.Tech">B.Tech</option>
              <option value="MCA">MCA</option>
            </select>
          </div>

          <div className="form-group">
            <label>City</label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Profile Image (optional)</label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </div>

          <button type="submit">
            Save Changes
          </button>

        </form>

      </div>
    </div>
  );
}

export default EditStudent;