import { Link } from "react-router-dom";
import "./StudentCard.css";

import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentCard({ student }) {

  const { deleteStudent } = useContext(StudentContext);

  return (
    <div className="student-card">
      <img
        src={student.image}
        alt={student.name}
        className="student-image"
      />

      <div className="student-info">
        <h3>{student.name}</h3>

        <p>Course: {student.course}</p>
        <p>Age: {student.age}</p>
        <p>City: {student.city}</p>

        <Link
          to={`/students/${student.id}`}
          className="profile-button"
        >
          View Profile
        </Link>

        <button
  className="delete-button"
  onClick={() => deleteStudent(student.id)}
>
  Delete
</button>
      </div>
    </div>
  );
}

export default StudentCard;