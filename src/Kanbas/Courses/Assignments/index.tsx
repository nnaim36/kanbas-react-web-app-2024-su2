import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { assignments } from "../../Database";
import { enrollments } from "../../Database";
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

export default function Assignments() {
    const test2= "RS102";
    const test = useParams();
    const cid = test.id;
    console.log("assignements cid");
    console.log(cid);
    const assignment_list = assignments.filter((assignment) => assignment.course === cid);
    console.log("assignment list");
    console.log(assignment_list);
    return (
      <div id="wd-assignments">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div >
        <input id="wd-search-assignment"
              type="text"
               placeholder="Search..." 
               className="form control me-1"/>
          </div>
          <div>
        <button id="wd-add-assignment-group"
        className="btn btn-lg me-1 border-dark btn-grey">
          + Group
        </button>
        <button id="wd-add-assignment "
        className="btn btn-lg btn-danger me-1">
          + Assignment
        </button>
        </div>
        </div>

        <div>
        <ul id="wd-assignments2" className="list-group rounded-0">
          <li className="wd-assignments list-group-item  p-0 mb-5 fs-5 border-gray">
          <div>
            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="align-items-center">
            <BsGripVertical className="mt-auto mb-auto fs-3 text-dark"/>
            <GoTriangleDown className="me-2"/>
            <label className="fs-3">ASSIGNMENTS</label>
            </div>
            
            <div className="me-2">
              <button className="btn border-dark rounded-pill">
            40% of Total 
            </button>
            <GoPlus className="me-2"/>
            <IoEllipsisVertical className="fs-3"/>
            </div>
            </div>
          </div>
        <ul id="wd-assignment-list" className="wd-assignments list-group rounded-0">
        {assignment_list.map((assignment)=>(
            <li className="wd-assignment-list-item list-group-item p-3 ps-1"> 
              <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
              <div className="d-flex align-items-center">
                <div className="flex-fill">
                  <BsGripVertical className="me-2 fs-3 text-dark"/>
                </div>
                <div className="flex-fill">
                  <MdOutlineAssignment className="text text-success fs-3"/>
                </div>

                <div className="flex-fill">
                  <label className="text text-dark fs-3">{assignment.title}</label>
                  <br />
                  <label className="text text-danger">Multiple Modules |</label>
                  <label className="text text-dark"> Not available until May 6 at 12:00am |</label>
                  <br />
                  <label className="text text-dark">Due May 13 at 11:59pm |</label>
                  <label className="text text-dark">100 pts</label>
                </div>

                <div className="flex-fill">
                  <GreenCheckmark />
                </div>
                <div className="flex-fill text-dark">
                  <IoEllipsisVertical/>
                </div>

              </div>
              </a>
            </li>
          )
          )}

      </ul>

      </li>
      </ul>
      </div>
    </div>
);}
