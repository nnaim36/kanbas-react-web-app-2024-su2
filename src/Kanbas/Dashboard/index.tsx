import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, UseSelector } from "react-redux";
import { createCourse } from "../Courses/client";
import * as client from "../Courses/client";
//import * as db from "../Database";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; })
{
  //const courses = db.courses;
  /*const [courses, setCourses] = useState(db.courses);
  const [course, setCourse]= useState<any>({
    id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };*/
  const [courses2,setCourses2] = useState<any[]>([]);

  const deleteCourse2 = async(cid:string) =>{
    console.log("DELETING!!!:",cid);
    await client.deleteCourse2(cid);
    fetchAllCourses();
  };

  const fetchAllCourses = async() =>{
    const courses = await client.findAllCourses();
    setCourses2(courses);
  };
  
  const saveCourse = async () => {
    const updatedCourse = {...course}
    console.log("updated course:",course);
    await client.updateCourse(course);
  }

  const createCourse = async () => {
    const course = await client.createCourse({
      name:"temp",
      number:`N${Date.now()}`,
      credits:4,
      description:"temp"

    });
    setCourses2([...courses2,course]);
  };


  //console.log("dashboard courses:",courses);
  //console.log("dashboard courses val1", typeof courses[0]?._id);
  const {currentUser} = useSelector((state:any) =>state.accountReducer);
  useEffect(()=>{
    fetchAllCourses();
  },[]);

  return (
    <div id="wd-dashboard">
      {/*<h1 id="wd-dashboard-title">Dashboard({currentUser.username})</h1> */}
      <h1 id="wd-dashboard-title">Dashboard()</h1> 
      <hr />
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={createCourse} > Add </button>
        <button className="btn btn-warning float-end me-2"
                onClick={saveCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
      <input value={course.name} className="form-control mb-2" 
      onChange={(e) => setCourse({ ...course, name: e.target.value }) } />

      <textarea value={course.description} className="form-control"
      onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
<hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses2.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses2.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <Link to={`/Kanbas/Courses/${course?.number}/Home`} className="text-decoration-none" >
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/reactjs.jpg" height="{160}" />
                  <div className="card-body">
                    <span className="wd-dashboard-course-link"
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                      {course.name}
                    </span>
                    <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                      {course.description}
                    </p>
                    <Link to={`/Kanbas/Courses/${course?.number}/Home`} className="btn btn-primary">Go</Link>
                    
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse2(course?._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            </button>
            <button id="wd-edit-course-click"
  onClick={(event) => {
    event.preventDefault();
    setCourse(course);
  }}
  className="btn btn-warning me-2 float-end" >
  Edit
</button>

                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
