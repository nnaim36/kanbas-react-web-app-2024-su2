import Modules from "../Modules";
import CourseStatus from "./Status";
import { Navigate, Route, Routes, useLocation, useParams} from "react-router-dom";
import {courses} from "../../Database";
import React,{ReactNode} from "react";

export default function Home({a}:{a:string}) {
  {/*}
  const {cid} =useParams();
  const course = courses.find((course) => course._id ===cid);
  const {pathname} = useLocation();
  console.log(course);
  */}
  console.log(a);
    return (
      <div>
          <div className="d-flex">
            <div className="col-10">
              <Modules />
            </div>

            <div className="col-2 p-3">
              <CourseStatus />
            </div>
          </div>
      </div>
      );    
}