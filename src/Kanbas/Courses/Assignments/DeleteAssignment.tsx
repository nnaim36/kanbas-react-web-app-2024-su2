import { FaTrash } from "react-icons/fa";
import DeletePopup from "./DeletePopup";
import { useDispatch } from "react-redux";

export default function DeleteAssignments(
    {assignmentID,deleteAssignment}:{
        assignmentID:string;
        deleteAssignment:(module:string) =>void;
    }
){
    const dispatch = useDispatch();
    return(
        <div>
            {/*<FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentID)}/>*/}
            <button id="wd-delete-module-btn" className="btn"
            data-bs-toggle="modal" data-bs-target="#wd-delete-module-dialog">
                <FaTrash className="text-danger me-2 mb-1" />
            </button>
            <DeletePopup dialogTitle="Warning" 
            moduleName={assignmentID} 
            deleteAssignment={deleteAssignment}
            />
        </div>
    );
}