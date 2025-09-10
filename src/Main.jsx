// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const courses = [
  { name: "Mathematics", courseId: "MATH101", studentPositions: 30 },
  { name: "Physics", courseId: "PHYS202", studentPositions: 25 },
  { name: "Computer Science", courseId: "CS303", studentPositions: 40 }
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App courses={courses} />
  </React.StrictMode>
);
