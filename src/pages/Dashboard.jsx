import { useContext } from "react";
import { Link } from "react-router-dom";

import { StudentContext } from "../context/StudentContext";

import "./Dashboard.css";

function Dashboard() {
  const { students, loading, error } = useContext(StudentContext);

  if (loading) {
    return <h2 className="dashboard-message">Loading dashboard...</h2>;
  }

  if (error) {
    return <h2 className="dashboard-message">{error}</h2>;
  }

  const totalCourses = new Set(
    students.map((student) => student.course)
  ).size;

  const totalCities = new Set(
    students.map((student) => student.city)
  ).size;

  const recentStudents = students.slice(0, 3);

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>

      <div className="dashboard-stats">

        <div className="stat-card">
          <h3>Total Students</h3>
          <p>{students.length}</p>
        </div>

        <div className="stat-card">
          <h3>Total Courses</h3>
          <p>{totalCourses}</p>
        </div>

        <div className="stat-card">
          <h3>Total Cities</h3>
          <p>{totalCities}</p>
        </div>

      </div>

      <div className="recent-section">
        <h2>Recent Students</h2>

        <div className="recent-students">
          {recentStudents.map((student) => (
            <div className="recent-card" key={student.id}>
              <img
                src={student.image}
                alt={student.name}
              />

              <div>
                <h3>{student.name}</h3>
                <p>{student.course}</p>
                <p>{student.city}</p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/students" className="view-all-button">
          View All Students
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;