import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import StudentProfile from "./pages/StudentProfile";
import AddStudent from "./pages/AddStudent";

import Navbar from "./components/Navbar";

import { StudentProvider } from "./context/StudentContext";
import EditStudent from "./pages/EditStudent";

function App() {
  return (
    <BrowserRouter>
      <StudentProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentProfile />} />
          <Route
  path="/students/:id/edit"
  element={<EditStudent />}
/>
          <Route path="/add-student" element={<AddStudent />} />
        </Routes>
      </StudentProvider>
    </BrowserRouter>
  );
}

export default App;