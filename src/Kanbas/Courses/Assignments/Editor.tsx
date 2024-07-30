import React, { useState } from "react";
import { useParams } from "react-router-dom";
//import { courses,assignments } from "../../Database";
import { addAssignment,deleteAssignment ,updateAssignment,editAssignment}
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";

//placeholder={ !isNaN(fGrade) ? `${fGrade}` : "0"}
export default function AssignmentEditor() {
  const test = useParams();
  console.log("editor test:",test);
  const cid = test.id;
  const courseval = test.cid;
  const {assignments} = useSelector((state:any) => state.assignmentReducer);

  const dispatch = useDispatch();

  const assignment = assignments.find((assignment:any) => assignment._id ===cid);
  //const assignemnt_copy =JSON.parse(JSON.stringify(assignment));
  const assignemnt_copy = structuredClone(assignment);
  //assignemnt_copy.title = "testing";
  const [assignmentName,setAssignmentName] = useState(assignemnt_copy.title);
  
  
  console.log("editor assignments:",assignments);
   console.log("editor assignment:",assignment);
   console.log("editor assignment copy:",assignemnt_copy);
    return (
      <div id="wd-assignments-editor" className="d-flex flex-column">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <br />
        <input id="wd-name" type="text" className="form-control" value={`${assignemnt_copy?.title}`} 
        onChange={(e) =>  dispatch(
          updateAssignment({ ...assignemnt_copy, title: e.target.value }) 
        )}/><br /><br />
        <textarea id="wd-description" className="form-control" rows={10} value={`${assignemnt_copy?.description}`}
        onChange={(e) =>  dispatch(
          updateAssignment({ ...assignemnt_copy, description: e.target.value }) 
        )}>

        </textarea>
        <br />
            <div>

        <div className="d-flex justify-content-end align-items-center mt-4">
          <div className="d-flex col-11" >
            <div className="col-3">
            <label htmlFor="wd-points" className="form-label text-right m-2 me-3">Points</label>
            </div>
            <div className="col-9">
            <input id="wd-points" className="form-control" value={`${assignemnt_copy?.points}`} 
            onChange={(e) =>  dispatch(
              updateAssignment({ ...assignemnt_copy, points: e.target.value }) 
            )}/>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end align-items-center mt-4">
          <div className="d-flex col-11" >
            <div className="col-3">
              <label htmlFor="wd-group" className="form-label text-right m-2 me-3">Assignment Group</label>
            </div>
            <div className="col-9">
              <select id="wd-group" className="form-select">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end align-items-center mt-4">
          <div className="d-flex col-11" >
            <div className="col-3">
              <label htmlFor="wd-display-grade-as" className="form-label text-right m-2 me-3">Display Grade as</label>
            </div>
            <div className="col-9">
              <select id="wd-display-grade-as" className="form-select">
                <option value="PERCENTAGE">Percentage</option>
                <option value="LETTER">Letter</option>
              </select>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end align-items-center mt-4">
          <div className="d-flex col-11" >
            <div className="col-3">
              <label htmlFor="wd-submission-type" className="form-label text-right m-2 me-3">Submission Type</label>
            </div>
            <div className="col-9 border border-dark ps-3 pt-2">
              <select id="wd-submission-type" className="form-select me-3">
                <option value="ONLINE">Online</option>
              </select>
              <label htmlFor="wd-online-entry-options" className="fs-5 form-label mt-3">Online Entry Options</label>
              <br />
              <input type="checkbox" name="check-text" id="wd-text-entry" className="form-check-input"/>
              <label htmlFor="wd-text-entry" className="form-label">Text Entry</label>
              <br />
              <input type="checkbox" name="check-website" id="wd-website-url" className="form-check-input"/>
              <label htmlFor="wd-website-url" className="form-label">Website URL</label>
              <br />
              <input type="checkbox" name="check-media" id="wd-media-recordings" className="form-check-input"/>
              <label htmlFor="wd-media-recordings" className="form-label">Media Recordings</label>
              <br />
              <input type="checkbox" name="check-annotation" id="wd-student-annotation" className="form-check-input"/>
              <label htmlFor="wd-student-annotation" className="form-label">Student Annotation</label>
              <br />
              <input type="checkbox" name="check-file" id="wd-file-upload" className="form-check-input"/>
              <label htmlFor="wd-file-upload" className="form-label">File Uploads</label>
            </div>
          </div>
        </div>


        <div className="d-flex justify-content-end align-items-center mt-4">
          <div className="d-flex col-11" >
            <div className="col-3">
              <label htmlFor="wd-assign" className="form-label text-right m-2 me-3">Assign</label>
            </div>
            <div className="col-9 border border-dark ps-3 pt-2">
              <label htmlFor="wd-assign-to" className="form-label fs-5"> Assign to</label>
              <br />
              <input type="text" id="wd-assign-to" placeholder="Everyone" className="form-control"/>
              <label htmlFor="wd-due-date" className="form-label fs-5 mt-3">Due</label>
              <br />
              <input type="date"
                  id="wd-due-date"
                  value={`${assignemnt_copy?.due_date}`}
                  className="form-control"
                  onChange={(e) =>  dispatch(
                    updateAssignment({ ...assignemnt_copy, due_date: e.target.value }) 
                  )}
                  />
                  <br />
                  <br/>
              <div className="d-flex">
                <div className="col-6">
                  <label htmlFor="wd-available-from" className="form-label fs-5">Available from</label>
                  <br />
                  <input type="date"
                    id="wd-available-from"
                    value={`${assignemnt_copy?.avail_date}`}
                    className="form-control"
                    onChange={(e) =>  dispatch(
                      updateAssignment({ ...assignemnt_copy, avail_date: e.target.value }) 
                    )}
                    />
                  <br />
                  <br/>
                </div>
                <div className="col-6">
                  <label htmlFor="wd-available-until" className="form-label fs-5">Until</label>
                  <br />
                  <input type="date"
                  id="wd-available-until"
                  value={`${assignemnt_copy?.until_date}`}
                  className="form-control"
                  onChange={(e) =>  dispatch(
                    updateAssignment({ ...assignemnt_copy, until_date: e.target.value }) 
                  )}
                  />
                  <br />
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <button className="btn border-dark me-2" onClick={() => window.location.href = `#/Kanbas/Courses/${courseval}/Assignments`}>
          Cancel
        </button>
        <button className="btn border-dark me-2"
        onClick={() => window.location.href = `#/Kanbas/Courses/${courseval}/Assignments`}>
          Save
        </button>
      </div>
    </div>
  );}
  