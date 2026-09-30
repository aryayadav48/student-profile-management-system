import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import "./StudentProfile.css";

import { StudentContext } from "../context/StudentContext";

function StudentProfile() {
  const { id } = useParams();

  const { students, loading, error } = useContext(StudentContext);

  if (loading) {
    return <h2>Loading profile...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return <h2>Student not found</h2>;
  }

  return (
  <div className="student-profile-page">
    <div className="student-profile-card">

      <h1 className="student-profile-title">
        Student Profile
      </h1>

      <div className="profile-main">

        <img
          src={student.image}
          alt={student.name}
          className="profile-image"
        />

        <div className="profile-basic-info">
          <h2>{student.name}</h2>

          <p>Course: {student.course}</p>
          <p>Age: {student.age}</p>
          <p>City: {student.city}</p>
        </div>

      </div>

      <div className="profile-details">
        <p>Email: {student.email}</p>
        <p>Phone: {student.phone}</p>
      </div>

      <Link
  to={`/students/${student.id}/edit`}
  className="edit-button"
>
  Edit Student
</Link>

      <Link to="/students" className="back-button">
        Back to Students
      </Link>

    </div>
  </div>
);
}

export default StudentProfile;