import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

//delete module
export const deleteModule = async (moduleId: string) => {
    //console.log("module client delete:",moduleId);
    //console.log("module client delete ad:",{MODULES_API},"/",{moduleId})
    const response = await axios
      .delete(`${MODULES_API}/${moduleId}`);
    return response.data;
};  

//new module
export const createModule = async (courseId: string, module: any) => {
    //console.log("module client module:",module);
    const response = await axios.post( `${COURSES_API}/${courseId}/modules`, module );
    //console.log("module client adding ID:",module);
    return response.data;
};  

//get modules
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};


/*
export function updateModule(module: any) {
  throw new Error("Function not implemented.");
}
*/
export const updateModule = async (module: any) => {
  console.log("module client adding ID:",module._id);
  const response = await axios.
    put(`${MODULES_API}/${module._id}`, module);
  return response.data;
};

