import { courses } from "../../Database";
import { useParams } from "react-router";
import "./index.css";

export default function CoursesNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];
    const test = useParams();
    const cid = test.id;
    const course = courses.find((course) => course._id ===cid);
    return (
      <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
        {links.map((link) =>(
          <a id={`wd-course-${link}`}  href={`#/Kanbas/Courses/${course?._id}/${link}`}
          className="list-group-item text-danger border border-0">
            {link}
          </a>
        ))}
        {/*
        <a id="wd-course-home-link"    href={`#/Kanbas/Courses/${course?._id}/Home`}
        className="list-group-item active border border-0">
          Home
          </a>
        <a id="wd-course-modules-link" href={`#/Kanbas/Courses/${course?._id}/Modules`} 
        className="list-group-item text-danger border border-0">
          Modules
          </a>
        <a id="wd-course-piazza-link"  href={`#/Kanbas/Courses/${course?._id}/Piazza`}
        className="list-group-item text-danger border border-0">
          Piazza
          </a>
        <a id="wd-course-zoom-link"    href={`#/Kanbas/Courses/${course?._id}/Zoom`}
        className="list-group-item text-danger border border-0">
          Zoom
          </a>
        <a id="wd-course-quizzes-link" href={`#/Kanbas/Courses/${course?._id}/Assignments`}
        className="list-group-item text-danger border border-0">
            Assignments</a>
        <a id="wd-course-assignments-link" href={`#/Kanbas/Courses/${course?._id}/Quizzes`}
        className="list-group-item text-danger border border-0">
          Quizzes
          </a>
        <a id="wd-course-grades-link"  href={`#/Kanbas/Courses/1234/Grades`} 
        className="list-group-item text-danger border border-0">
          Grades
          </a>
          */}
      </div>
  );}
  