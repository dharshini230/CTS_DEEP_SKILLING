import { Link } from "react-router-dom";

function HomePage() {

  return (

    <div className="container">

      <h2>Welcome to Student Portal</h2>

      <p>
        Manage your courses, profile and enrollments using this portal.
      </p>

      <br />

      <Link to="/courses">
        <button>View Courses</button>
      </Link>

    </div>

  );

}

export default HomePage;