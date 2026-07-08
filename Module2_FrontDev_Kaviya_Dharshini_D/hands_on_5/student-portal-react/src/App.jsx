import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";
import StudentProfile from "./components/StudentProfile";
import coursesData from "./data/courses";
import "./App.css";

function App() {

  const [courses, setCourses] = useState(coursesData);
  const [searchTerm, setSearchTerm] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    async function loadCourses() {

      try {

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        const posts = await response.json();

        const apiCourses = posts.map((post, index) => ({
          id: index + 1,
          name: post.title,
          code: `CS10${index + 1}`,
          credits: (index % 2) + 3,
          grade: "A"
        }));

        setCourses(apiCourses);

      } catch {

        setError("Failed to load courses.");

      } finally {

        setLoading(false);

      }

    }

    loadCourses();

  }, []);

  useEffect(() => {

    console.log("Courses updated");

  }, [courses]);

  const handleEnroll = (course) => {

    if (!enrolledCourses.find(c => c.id === course.id)) {

      setEnrolledCourses([...enrolledCourses, course]);

    }

  };

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      <Header
        siteName="Student Portal"
        enrolledCount={enrolledCourses.length}
      />

      <div className="container">

        <h2>Available Courses</h2>

        <input
          type="text"
          placeholder="Search Course"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <br /><br />

        {loading && <h3>Loading...</h3>}

        {error && <h3>{error}</h3>}

        {!loading &&
          filteredCourses.map(course => (

            <CourseCard
              key={course.id}
              {...course}
              onEnroll={() => handleEnroll(course)}
            />

          ))
        }

        <StudentProfile />

      </div>

      <Footer />

    </div>
  );

}

export default App;