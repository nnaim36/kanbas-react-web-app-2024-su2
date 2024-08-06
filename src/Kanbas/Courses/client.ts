import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
console.log("client address:",COURSES_API);

//get courses
export const fetchAllCourses = async () => {
    console.log("client fetchall cources called!");
  const {data} = await axios.get(COURSES_API);
  console.log("client data:",data);
  return data;
};

//adding course
export const createCourse = async (course: any) => {
    const response = await axios.post(COURSES_API, course);
    return response.data;
  };

  //deleting course
  export const deleteCourse = async (id: string) => {
    const response = await axios.delete(`${COURSES_API}/${id}`);
    return response.data;
  };

  //updating course
  export const updateCourse = async (course: any) => {
    const response = await axios.put(`${COURSES_API}/${course._id}`, course);
    return response.data;
  };

  
  
  