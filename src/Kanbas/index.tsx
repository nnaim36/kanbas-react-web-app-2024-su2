import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route , Navigate} from "react-router";
import Courses from "./Courses";
import "./styles.css";
//import * as db from "./Database";
import * as client from "./Courses/client";
//import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";


export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  //const [courses, setCourses] = useState<any[]>(db.courses);
    
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  
  const fetchCourses = async () => {
    const courses1 = await client.fetchAllCourses();
    setCourses(courses1);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([ ...courses, newCourse ]);
  };

  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };


  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  //fetchCourses();
  //const temp1 = client.fetchAllCourses();

  console.log("kanbus courses from database:",courses);
  //console.log("kanbus temp from database:",temp1);
  
  /*
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  */
 /*
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course:any) => course?._id !== courseId));
  };
  */
 /*
  const updateCourse = () => {
    setCourses(
      courses.map((c:any) => {
        if (c?._id === course?._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  */
  


    //console.log("kanbus course:",course);
    //console.log("kanbus courses:",courses);
    return (
      <Provider store={store}>

      <div id="wd-kanbas" className="flex d-flex">
        <KanbasNavigation />
          <div className="wd-main-content-offset p-3">
            <Routes>
                {/**/}
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Dashboard" element={<Dashboard 
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>} />
                <Route path="Courses/:cid/*" 
                element={<Courses courses={courses} />} 
                />
                {/**/}


            </Routes>
          </div>
      </div>
      </Provider>
  );
}