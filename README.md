# Student Profile Management System

A responsive **Student Profile Management System** built with **React.js**.
This project allows users to view, search, add, edit, and delete student profiles with data persistence using Local Storage.

## 🚀 Features

* 📊 Dashboard with student statistics
* 👨‍🎓 View all students
* 🔍 Search students by name, course, or city
* 👤 View individual student profiles
* ➕ Add new students
* ✏️ Edit existing student details
* 🗑️ Delete students
* 💾 Data persistence using Local Storage
* 🌐 Fetch initial student data from API
* 🔄 React Context API for global state management
* 🧭 React Router for page navigation
* 📱 Responsive design for desktop and mobile

## 🛠️ Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* React Router
* Context API
* REST API / Fetch
* Local Storage
* Vite

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   └── StudentCard.jsx
│
├── context/
│   └── StudentContext.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Students.jsx
│   ├── StudentProfile.jsx
│   ├── AddStudent.jsx
│   └── EditStudent.jsx
│
├── App.jsx
└── main.jsx



## 🔗 API Used

Initial student data is fetched from:

```text
https://jsonplaceholder.typicode.com/users
```

The API data is converted into student profile data such as name, email, phone, course, age, and city.

## 💾 Data Persistence

The project uses **Local Storage** to save student data.

This means:

* Newly added students remain after refreshing the page.
* Edited student information remains saved.
* Deleted students remain deleted after refreshing.
* When no saved data is available, the application fetches initial data from the API.

## 🧠 React Concepts Used

This project was created to practice important React concepts, including:

* `useState`
* `useEffect`
* `useContext`
* React Context API
* React Router
* `BrowserRouter`
* `Routes` and `Route`
* `Link`
* `useNavigate`
* `useParams`
* Conditional Rendering
* Form Handling
* Array Methods such as `map()`, `filter()`, and `find()`
* API Fetching
* Local Storage
* JSON `stringify()` and `parse()`

## 📌 Main Pages

| Page            | Purpose                                         |
| --------------- | ----------------------------------------------- |
| Dashboard       | Shows student statistics and recent students    |
| Students        | Displays all students with search functionality |
| Student Profile | Shows complete details of a selected student    |
| Add Student     | Allows adding a new student                     |
| Edit Student    | Allows editing existing student information     |

## 🎯 Purpose of the Project

The main purpose of this project is to practice React.js concepts by building a complete CRUD-based student management application with routing, global state management, API integration, and local data persistence.

## 👩‍💻 Author

**Tanya Ahuja**

Frontend Developer | React.js Learner

### Skills

* HTML
* CSS
* JavaScript
* React.js
* Responsive Web Design
