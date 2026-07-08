import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { enrollCourse } from "../redux/enrollmentSlice";

function CourseCard({ course }) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEnroll = () => {

    dispatch(enrollCourse(course));

    navigate("/profile");

  };

  return (

    <div className="course-card">

      <h2>{course.name}</h2>

      <p><strong>Code:</strong> {course.code}</p>

      <p><strong>Credits:</strong> {course.credits}</p>

      <p><strong>Instructor:</strong> {course.instructor}</p>

      <button onClick={handleEnroll}>
        Enroll
      </button>

    </div>

  );

}

export default CourseCard;