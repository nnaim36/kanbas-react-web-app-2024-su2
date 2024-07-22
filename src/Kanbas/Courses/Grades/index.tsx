import { MdOutlineFilterAlt } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { CiImport } from "react-icons/ci";
import { FaFileExport } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { assignments,grades,enrollments,users } from "../../Database";


export default function Grades() {
  const test = useParams();
  const results1 = {student_id:null,student_name:null}; 
  const cid = test.id;
  const assignment_list = assignments.filter((assignment) => assignment.course ===cid);
  const user_list = grades.filter((grade)=>(grade.assignment === assignment_list[0]._id))
  console.log("grades value");
  console.log(assignment_list);
  console.log("user list");
  console.log(user_list);
  
  const userInCourse = enrollments.filter((enrollment) =>enrollment.course ===cid);

  const pure_assignments = assignment_list.filter((assignment) => (assignment._id) )
  let fResults = [];

for (let k = 0; k < user_list.length; k++) {
  var temp = [];
  var temp2 = [];
  let username = users.find((user) => user._id === user_list[k]._id);
  console.log("user name:",username);
  temp.push(username);
  temp.push(user_list[k]);
  
  for (let i = 0; i < pure_assignments.length; i++) {
    var grade = grades.find((grade) => (grade.student === user_list[k]._id && grade.assignment === pure_assignments[i]._id));
    temp2.push(grade);
  }

  fResults.push(temp);
  fResults.push(temp2);
  console.log("temp2 value:", temp2);
}
  console.log("final value");
  console.log(fResults);
  return(
    <div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-lg btn-secondary me-1 text-nowrap">
          <CiImport />
            Import
          </button>
        <button className="btn btn-lg btn-secondary me-1 text-nowrap">
          <FaFileExport />
            Export
        </button>
        <button className="btn btn-lg btn-secondary me-1 text-nowrap">
          <FaGear/>
        </button>
      </div>
      <div>
        {/*left and right*/}
        <div className="row">
          <div className="col-6">
            <label htmlFor="wd-assignments-search-students" className="fs-3">Student Names</label>
            <br />
            <input type="text" placeholder="Search Students" 
              id="wd-assignments-search-students" 
              className="form-control"/>
          </div>
          <div className="col">
            <label htmlFor="wd-assignments-search-assignments" className="fs-3">Assignment Names</label>
              <br />
              <input type="text" placeholder="Search Assignments" 
              id="wd-assignments-search-assignments"
              className="form-control"/>
          </div>
        </div>
      </div>
      <div>
        <button className="btn btn-lg btn-secondary mt-4 mb-4 text-nowrap">
          <MdOutlineFilterAlt/>
          Apply Filters
        </button>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="border border-secondary">
                <label htmlFor="">student Name</label>
              </th>
              {assignment_list.map((assignment) => (
                <th scope="col" className="border border-secondary text-center">
                  <label>{assignment.title}</label>
                  <br />
                  <label>out of 100</label>
                </th>
              ))}

            </tr>
          </thead>
          <tbody>
          {userInCourse.map((user) => {
            const foundUser = users.find((user2) => user2._id === user.user);
            return (
              <tr key={user._id}>
                <th scope="row" className="text-danger border border-secondary">
                  {foundUser ? foundUser.firstName+" "+foundUser.lastName : 'User not found'}
                </th>
                {assignment_list.map((assignment)=>{

                  const studentAssignmentGrades = grades.filter((grade) => grade.assignment ===assignment._id);
                  const assignmentGrade = studentAssignmentGrades.find((grade2)=>grade2.student===user.user);
                  const fGrade= Number(assignmentGrade?.grade);
                  console.log("student assign grade:",studentAssignmentGrades);
                  console.log("user:",user);
                  console.log("grade:",fGrade);
                  return(
                    <td className="border border-secondary">
                      <input type="number" placeholder={ !isNaN(fGrade) ? `${fGrade}` : "0"}/>%
                    </td>
                  );
                })}
              </tr>
            );
          })}

          </tbody>
        </table>
            </div>
        </div>
    );
}