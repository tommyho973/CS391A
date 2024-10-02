import "./App.css";
import { CourseStaff } from "./components/course-staff";

function App() {
  return (
    <div>
      <h2>The amazing CS391 course staff!</h2>
      <div>
        <CourseStaff name="Taymaz" title="Professor" rating={92} />
        <CourseStaff name="Jeffrey" title="Teaching Assistant" rating={90} />
        <CourseStaff name="Sadiq" title="Course Assistant" rating={90} />
        <CourseStaff name="Ale" title="Course Assistant" rating={90} />
      </div>
    </div>
  );
}

export default App;
