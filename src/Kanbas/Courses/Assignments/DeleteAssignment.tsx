import { FaTrash } from "react-icons/fa";
import DeletePopup from "./DeletePopup";
import { useDispatch } from "react-redux";
import { addAssignment,deleteAssignment } from "./reducer";

export default function DeleteAssignments(
    {assignmentID,deleteAssignment}:{
        assignmentID:string;
        deleteAssignment:(module:string) =>void;
    }
){
    const dispatch = useDispatch();
    const localassignmentID = assignmentID;
    return(
        <div>
            {/*<FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentID)}/>*/}
            <button id="wd-delete-module-btn" className="btn"
            onClick={() => deleteAssignment(assignmentID)}
            
            >
                <FaTrash className="text-danger me-2 mb-1" />
            </button>
            {/*
            <DeletePopup dialogTitle="Warning" 
            moduleName={localassignmentID} 
            deleteAssignment={deleteAssignment}
            
            />
            */}
        </div>
    );
}