import {FaPlus} from "react-icons/fa6";
import { MdDoNotDisturbAlt } from "react-icons/md";
import '../../../Kanbas/styles.css';
import { GoPlus } from "react-icons/go";
import NewAssignment from "./NewAssignment";
import { addAssignment } from "./reducer";


export default function ModulesControls({ assignmentName, setAssignmentName,assignmentDescript ,setAssignmentDescrip,
    addAssignment,setAssignmentPoints,assignmentPoints,assignmentDue,setAssignmentDue,assignmentAvail,SetAssignmentAvail,
    assignmentUntil,SetAssignmentUntil}:
    { assignmentName: string; setAssignmentName: (title: string) => void;
        setAssignmentDescrip: (description:string)=>void; assignmentDescript:string ;
        assignmentPoints:string;setAssignmentPoints:(title: string) => void;addAssignment: () => void; 
        assignmentDue:string;setAssignmentDue:(due_date:string)=>void; 
        assignmentAvail:string; SetAssignmentAvail:(avail_date:string)=>void;
        assignmentUntil:string;SetAssignmentUntil:(avail_date:string)=>void;}){

    function dispatch(arg0: any): void {
        throw new Error("Function not implemented.");
    }

    return(
        <div id="wd-add-assignment ">
            <button className="btn btn-lg btn-danger me-1"
            data-bs-toggle="modal" data-bs-target="#wd-add-assignment-dialog">
              <GoPlus className="me-2 fs-3"/>
              Assignment
            </button>

            <NewAssignment dialogTitle="Add Module" assignmentName={assignmentName}
                setAssignmentName={setAssignmentName}
                addAssignment={addAssignment} 
                assignmentDescript={assignmentDescript}
                setAssignmentPoints={setAssignmentPoints}
                assignmentPoints={assignmentPoints}
                setAssignmentDescript={setAssignmentDescrip}
                assignmentDue={assignmentDue}
                setAssignmentDue={setAssignmentDue}
                assignmentAvail={assignmentAvail}
                SetAssignmentAvail={SetAssignmentAvail}
                assignmentUntil={assignmentUntil}
                SetAssignmentUntil={SetAssignmentUntil}
                />
        </div>
    );

}