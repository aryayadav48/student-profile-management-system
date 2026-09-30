import { createContext, useEffect, useState } from "react";

const StudentContext = createContext();

// Fixed profile images so the same students keep the same photos.
const profileImages = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80&crop=faces",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80&crop=faces",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80&crop=faces",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80&crop=faces",
  "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=500&q=80&crop=faces",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80&crop=faces",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80&crop=faces",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=500&q=80&crop=faces",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80&crop=faces",
];

const getDefaultImage = (index = 0) =>
  profileImages[index % profileImages.length];

const defaultStudents = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@college.edu",
    phone: "+91 98765 43210",
    age: 19,
    course: "B.Tech Computer Science",
    city: "Delhi",
    image: getDefaultImage(0),
  },
  {
    id: 2,
    name: "Ananya Verma",
    email: "ananya.verma@college.edu",
    phone: "+91 89765 12340",
    age: 20,
    course: "BBA",
    city: "Jaipur",
    image: getDefaultImage(1),
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "rohan.mehta@college.edu",
    phone: "+91 91234 56789",
    age: 21,
    course: "B.Com",
    city: "Mumbai",
    image: getDefaultImage(2),
  },
  {
    id: 4,
    name: "Diya Nair",
    email: "diya.nair@college.edu",
    phone: "+91 99887 66554",
    age: 18,
    course: "B.Sc Information Technology",
    city: "Bengaluru",
    image: getDefaultImage(3),
  },
  {
    id: 5,
    name: "Kabir Singh",
    email: "kabir.singh@college.edu",
    phone: "+91 98111 22334",
    age: 22,
    course: "MBA",
    city: "Pune",
    image: getDefaultImage(4),
  },
  {
    id: 6,
    name: "Meera Iyer",
    email: "meera.iyer@college.edu",
    phone: "+91 93456 78123",
    age: 19,
    course: "B.A. English",
    city: "Chennai",
    image: getDefaultImage(5),
  },
  {
    id: 7,
    name: "Aditya Rao",
    email: "aditya.rao@college.edu",
    phone: "+91 97654 32109",
    age: 20,
    course: "B.E. Mechanical",
    city: "Hyderabad",
    image: getDefaultImage(6),
  },
  {
    id: 8,
    name: "Sana Khan",
    email: "sana.khan@college.edu",
    phone: "+91 90988 11223",
    age: 21,
    course: "BCA",
    city: "Lucknow",
    image: getDefaultImage(7),
  },
  {
    id: 9,
    name: "Vihaan Das",
    email: "vihaan.das@college.edu",
    phone: "+91 98901 23456",
    age: 22,
    course: "B.Tech Electronics",
    city: "Kolkata",
    image: getDefaultImage(8),
  },
  {
    id: 10,
    name: "Zoya Malik",
    email: "zoya.malik@college.edu",
    phone: "+91 90541 87654",
    age: 18,
    course: "B.Sc Nursing",
    city: "Ahmedabad",
    image: getDefaultImage(9),
  },
];

function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Add new student
  const addStudent = (newStudent) => {
    const studentWithImage = {
      ...newStudent,
      image:
        newStudent.image ||
        getDefaultImage(students.length),
    };

    setStudents((prevStudents) => {
      const updatedStudents = [...prevStudents, studentWithImage];

      localStorage.setItem(
        "students",
        JSON.stringify(updatedStudents)
      );

      return updatedStudents;
    });
  };

  const deleteStudent = (id) => {
  setStudents((prevStudents) => {
    const updatedStudents = prevStudents.filter(
      (student) => student.id !== id
    );

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );

    return updatedStudents;
  });
};

const updateStudent = (updatedStudent) => {
  setStudents((prevStudents) => {
    const updatedStudents = prevStudents.map((student) =>
      student.id === updatedStudent.id
        ? updatedStudent
        : student
    );

    localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );

    return updatedStudents;
  });
};

  useEffect(() => {
    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {
      try {
        const parsedStudents = JSON.parse(savedStudents);

        if (Array.isArray(parsedStudents) && parsedStudents.length > 0) {
          const refreshedStudents = parsedStudents.map((student, index) => ({
            ...student,
            image:
              student.image && !student.image.includes("i.pravatar.cc")
                ? student.image
                : getDefaultImage(index),
          }));

          setStudents(refreshedStudents);
          localStorage.setItem("students", JSON.stringify(refreshedStudents));
          setLoading(false);
          setError("");
          return;
        }
      } catch (error) {
        console.error("Failed to parse saved students:", error);
      }
    }

    const seededStudents = defaultStudents.map((student, index) => ({
      ...student,
      image: getDefaultImage(index),
    }));

    localStorage.setItem("students", JSON.stringify(seededStudents));
    setStudents(seededStudents);
    setLoading(false);
    setError("");
  }, []);

  return (
    <StudentContext.Provider
     value={{
  students,
  loading,
  error,
  addStudent,
  deleteStudent,
  updateStudent,
}}
    >
      {children}
    </StudentContext.Provider>
  );
}

export { StudentContext, StudentProvider };