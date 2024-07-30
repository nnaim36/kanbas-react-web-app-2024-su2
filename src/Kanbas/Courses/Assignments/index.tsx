import React, { useState } from "react";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineAssignment } from "react-icons/md";
import { GoTriangleDown } from "react-icons/go";
import { GoPlus } from "react-icons/go";
//import { assignments } from "../../Database";
import { enrollments } from "../../Database";
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

import { addAssignment,deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import NewAssignment from "./NewAssignment";
import ModulesControls from "./AssignmentControls";
import DeleteAssignments from "./DeleteAssignment";

export default function Assignments() {
    const test2= "RS102";
    const test = useParams();
    const cid = test.cid;

    {/*
    console.log("assign: ",test);
    console.log("assignements cid: ",cid);
    const assignment_list = assignments.filter((assignment) => assignment.course === cid); //this works
    console.log("assignment list",assignment_list);
    */}
    const [assignmentName,setAssignmentName] = useState("");
    const [assignmentDescript,setAssignmentDescrip] = useState("");
    const [assignmentPoints,setAssignmentPoints] = useState("");

    const [assignmentDue,setAssignmentDue] = useState("");
    const [assignmentAvail,SetAssignmentAvail] = useState("");
    const [assignmentUntil,SetAssignmentUntil] = useState("");

    const {assignments} = useSelector((state:any) => state.assignmentReducer);
    const dispatch = useDispatch();
    const assignment_list = assignments.filter((assignment:any) => assignment.course === cid);

    const moduleName = "test";
    //const setModuleName = "test2";
    //const setModuleName =  setModuleName: (title: string) => void;
    //const setModuleName = addAssignment;
    //const addModule = dispatch(addAssignment ({title:"test"}));
    console.log("assignment list", assignment_list);

    return (
      <div id="wd-assignments">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="">
        <input id="wd-search-assignment"
              type="text"
               placeholder="Search..." 
               className="form control me-1"/>
          </div>
          <div className="d-flex">
        <button id="wd-add-assignment-group"
        className="btn btn-lg me-1 border-dark btn-grey">
          + Group
        </button>
        <ModulesControls 
        setAssignmentName={setAssignmentName}
        assignmentName={assignmentName}
        setAssignmentDescrip = {setAssignmentDescrip}
        assignmentDescript={assignmentDescript}
        assignmentPoints={assignmentPoints}
        setAssignmentPoints={setAssignmentPoints}

        assignmentDue={assignmentDue}
        setAssignmentDue={setAssignmentDue}
        assignmentAvail={assignmentAvail}
        SetAssignmentAvail={SetAssignmentAvail}
        assignmentUntil={assignmentUntil}
        SetAssignmentUntil={SetAssignmentUntil}
        
        addAssignment={() => {
          dispatch(addAssignment({ title: assignmentName, course: cid }));
          setAssignmentName("");
        }}/>
        {/*}
        <button id="wd-add-assignment "
        className="btn btn-lg btn-danger me-1">
          + Assignment
        </button>
        */}
        </div>
        </div>
        

        <div className="d-flex">
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
            <button className="btn btn-lg"
            data-bs-toggle="modal" data-bs-target="#wd-add-assignment-dialog">
              <GoPlus className="me-2 fs-3"/>
              
            </button>
            <IoEllipsisVertical className="fs-3"/>
            </div>
            </div>
          </div>
        <ul id="wd-assignment-list" className="wd-assignments list-group rounded-0">
        {assignment_list.map((assignment:any)=>(
            <li className="wd-assignment-list-item list-group-item p-3 ps-1"> 
              

              <div className="d-flex align-items-center">
              
                <div className="flex-fill">
                  <BsGripVertical className="me-2 fs-3 text-dark"/>
                </div>
                <div className="flex-fill m-2">
                <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                  <MdOutlineAssignment className="text text-success fs-3"/>
                  </a>
                </div>

                <div className="flex-fill">
                <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                  <label className="text text-dark fs-3">{assignment.title}</label>
                  <br />
                  <label className="text text-danger">Multiple Modules |</label>
                  <label className="text text-dark"> Not available until {assignment.avail_date} |</label>
                  <br />
                  <label className="text text-dark">Due {assignment.due_date} |</label>
                  <label className="text text-dark">{assignment.points} pts</label>
                  </a>
                </div>
                
                <div className="d-flex">
                  <div>
                  <DeleteAssignments
                    assignmentID={assignment._id}
                    deleteAssignment = {(moduleId) => {
                      dispatch(deleteAssignment(moduleId));
                    }}
                  />
                  </div>
                  <div>
                  <GreenCheckmark />
                  </div>
                </div>
                <div className="flex-fill text-dark">
                  <IoEllipsisVertical/>
                </div>

              </div>
              
            </li>
          )
          )}

      </ul>

      </li>
      </ul>
      </div>
      {/*
      <NewAssignment dialogTitle="Add Module" assignmentName={assignmentName}
                setAssignmentName={setAssignmentName}
                addAssignment={addAssignment} />
      */}
      
    </div>
);}
