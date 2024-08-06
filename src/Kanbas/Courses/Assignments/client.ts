import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/assignments`;

//get assignments
export const findAssignmentsForCourse = async (courseId: string) => {
    //console.log("assignments address:",{COURSES_API},"/",{courseId},"/assignments");
    const response = await axios
      .get(`${COURSES_API}/${courseId}/assignments`);

      //console.log("assignments clicent:",response.data);
    return response.data;
};

//add assignment
export const createAssignment = async (courseId: string, module: any) => {
    //console.log("assignment client create:",module);
    const response = await axios.post( `${COURSES_API}/${courseId}/assignments`, module );
    return response.data;
};  

//delete assignment
export const deleteAssignment = async (assignmentId: string) => {
    console.log("assignment client delete:",assignmentId);
    console.log("assignment client delete ad:",{MODULES_API},"/",{assignmentId})
    const response = await axios
      .delete(`${MODULES_API}/${assignmentId}`);
    return response.data;
}; 

//update assignment
export const updateAssignment = async (assignment: any) => {
    console.log("assignment client adding ID:",assignment._id);
    const response = await axios.
      put(`${MODULES_API}/${assignment._id}`, assignment);
    return response.data;
  };