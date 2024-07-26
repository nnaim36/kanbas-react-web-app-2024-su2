import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

import { Navigate, Route, Routes, useLocation,useParams} from "react-router-dom"

import { FaAlignJustify } from 'react-icons/fa';
import "../styles.css";

export default function Courses({ courses }: { courses: any[]; }) {
    const test = useParams();
    const cid = test.id;
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    console.log("courses:",course);
    console.log("cid:",cid);
    console.log("test:",cid);
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          {course && course.name} &gt;
           {pathname.split("/")[4]}
        </h2>
        <hr />
          <div className="container">
          <div className="row">
          <div className="col-3">
            <CoursesNavigation />
          </div>
          
          <div className="col-9">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home a={pathname.split("/")[3]}/>} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Zoom" element={<h1>Zoom</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:id" element={<AssignmentEditor />} />
              <Route path="Quizzes" element={<h1>Quizzes</h1>} />
              <Route path="Grades" element={<Grades />} />
            </Routes>
      </div>

      </div>
      </div>
      </div>
  );}
  