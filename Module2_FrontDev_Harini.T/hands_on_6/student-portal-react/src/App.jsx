import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import CoursesPage from "./components/CoursesPage";
import CourseDetailPage from "./components/CourseDetailPage";
import ProfilePage from "./components/ProfilePage";
import "./App.css";

function App() {

  return (

    <div>

      <Header />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/courses"
          element={<CoursesPage />}
        />

        <Route
          path="/courses/:courseId"
          element={<CourseDetailPage />}
        />

        <Route
          path="/profile"
          element={<ProfilePage />}
        />

      </Routes>

      <Footer />

    </div>

  );

}

export default App;