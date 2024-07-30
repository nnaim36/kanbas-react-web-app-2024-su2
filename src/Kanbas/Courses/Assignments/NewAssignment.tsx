export default function NewAssignment({ dialogTitle, assignmentName, setAssignmentName, setAssignmentDescript,
    assignmentDescript,addAssignment,setAssignmentPoints,assignmentPoints,assignmentDue,setAssignmentDue,assignmentAvail,SetAssignmentAvail,
    assignmentUntil,SetAssignmentUntil }:
    { dialogTitle: string; assignmentName: string; setAssignmentName: (name: string) => void; 
        assignmentDescript:string ; setAssignmentDescript: (name: string) => void;
        assignmentPoints:string; setAssignmentPoints:(name: string) => void;addAssignment: () => void;
        assignmentDue:string;setAssignmentDue:(due_date:string)=>void; 
        assignmentAvail:string; SetAssignmentAvail:(avail_date:string)=>void;
        assignmentUntil:string;SetAssignmentUntil:(avail_date:string)=>void; }) {
        console.log("assignmentName: ", assignmentName);
        console.log("dialogTitle:",dialogTitle)
      return (
        <body>
    <div id="wd-add-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {dialogTitle} </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <label htmlFor="">Assignment Name</label>
            <input className="form-control" value={assignmentName} placeholder="Module Name"
             onChange={(e) => setAssignmentName(e.target.value)}/>
          </div>
          <div className="m-2">
            <textarea className="form-control " value={assignmentDescript} placeholder="New Assignment Description"
            onChange={(e) => setAssignmentDescript(e.target.value)}>
              
            </textarea>
          </div>
          <div className="d-flex m-2 col-md-6">
              <label >Points</label>
              <input className="form-control" placeholder="100" value={assignmentPoints}
              onChange={(e) => setAssignmentPoints(e.target.value)}/>
          </div>
          <div className="d-flex m-2">
            <label >Assign</label>
            <div className="border m-2">
              <label >Due</label>
              <input type="date" name="" id="" value="" className="form-control"/>

              <div className="d-flex">
                <div className="form-group col-md-6" >
                    <label htmlFor="">Available from</label>
                    <input className="form-control" type="date" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="">Until</label>
                    <input className="form-control" type="date" />
                </div>
              </div>
            </div>

          </div>
             <div className="modal-footer">
               <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                 Cancel </button>
               <button onClick={addAssignment} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                 Save </button>
             </div>
                             </div>
                           </div>
                         </div>
  </body>
                           );
                         }