import { useParams } from "react-router-dom";
import courses from "../data/courses";

function CourseDetailPage() {

  const { courseId } = useParams();

  const course = courses.find(
    item => item.id === Number(courseId)
  );

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  return (

    <div className="container">

      <h2>{course.name}</h2>

      <p>
        <strong>Code:</strong> {course.code}
      </p>

      <p>
        <strong>Credits:</strong> {course.credits}
      </p>

      <p>
        <strong>Instructor:</strong> {course.instructor}
      </p>

      <p>
        <strong>Description:</strong> {course.description}
      </p>

    </div>

  );

}

export default CourseDetailPage;