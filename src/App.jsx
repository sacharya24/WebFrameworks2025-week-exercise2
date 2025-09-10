// src/App.jsx
import CourseList from "./CourseList";

function App({ courses }) {
  return (
    <div>
      <h1>Course List</h1>
      <CourseList courses={courses} />
    </div>
  );
}

export default App;
