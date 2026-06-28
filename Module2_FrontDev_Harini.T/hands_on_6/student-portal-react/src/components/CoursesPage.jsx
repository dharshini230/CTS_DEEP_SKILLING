import { useState } from "react";
import CourseCard from "./CourseCard";
import courses from "../data/courses";

function CoursesPage() {

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className="container">

      <h2>Available Courses</h2>

      <input
        type="text"
        placeholder="Search Course"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <br />
      <br />

      {filteredCourses.map(course => (
        <CourseCard
          key={course.id}
          course={course}
        />
      ))}

    </div>

  );

}

export default CoursesPage;