import { deleteAssignment } from "./reducer";
import * as client from "./client";
import { useSelector, useDispatch } from "react-redux";

export default function DeletePopup({ dialogTitle, assignmentsID,deleteAssignment  }:
    { dialogTitle: string; assignmentsID: string;deleteAssignment:(assignmentID:string)=>void}) {
    console.log("delepop up module:",assignmentsID);

    
    
    const dispatch = useDispatch();

    
      return (
        <div id="wd-delete-module-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  {dialogTitle} </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <p>are you sure you want to delete?</p>

                                   </div>
                                   <div className="modal-footer">
                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                       Cancel </button>
                                     <button onClick={() => deleteAssignment(assignmentsID)} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                                       Delete </button>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           );
                         }