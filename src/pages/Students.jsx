import { useContext, useState } from "react";

import StudentCard from "../components/StudentCard";
import SearchBar from "../components/SearchBar";

import { StudentContext } from "../context/StudentContext";

import "./Students.css";

function Students() {
  const { students, loading, error } = useContext(StudentContext);

  const [searchTerm, setSearchTerm] = useState("");

  if (loading) {
    return <h2 className="students-message">Loading students...</h2>;
  }

  if (error) {
    return <h2 className="students-message">{error}</h2>;
  }

  const filteredStudents = students.filter((student) => {
    const search = searchTerm.toLowerCase();

    return (
      student.name.toLowerCase().includes(search) ||
      student.course.toLowerCase().includes(search) ||
      student.city.toLowerCase().includes(search)
    );
  });

  return (
    <div className="students-page">
      <h1>Students</h1>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="students-grid">
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>

      {filteredStudents.length === 0 && (
        <p className="no-students">
          No students found.
        </p>
      )}
    </div>
  );
}

export default Students;