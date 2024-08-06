import { courses } from "../../Database";
import { useParams } from "react-router";
import "./index.css";

export default function CoursesNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
    const test = useParams();
    const cid = test.cid;
    const course = courses.find((course) => course._id ===cid);
    console.log("course nav:",course);
    console.log("course nav cid:",cid);
    return (
      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
        {links.map((link) =>(
          <a id={`wd-course-${link}`}  href={`#/Kanbas/Courses/${cid}/${link}`}
          className="list-group-item text-danger border border-0">
            {link}
          </a>
        ))}

      </div>
  );}
  