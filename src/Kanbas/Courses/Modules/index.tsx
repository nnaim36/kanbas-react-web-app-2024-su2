import React, { useState } from "react";
import ModulesControls from "./ModulesControls";
import ModuleControlsButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
//import * as db from "../../Database";
//import { modules } from "../../Database";
import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";


export default function Modules(){
  const test = useParams();
  const cid = test.cid;
  //const module_list = modules.filter((module) => module.course === cid );
  //const [modules, setModules] = useState<any[]>(db.modules);
  //const [moduleName, setModuleName] = useState("");
  const [moduleName, setModuleName] = useState("");

  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  
  /*const addModule = () => {
    setModules([ ...modules, { _id: new Date().getTime().toString(),
                                     name: moduleName, course: cid, lessons: [] } ]);
    setModuleName("");
  };

  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };
  const editModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  };
  const updateModule = (module: any) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };

*/


  console.log("module value",modules);
  console.log(modules);
  const module_list = modules.filter((module:any) => module.course === cid );
  return(
<div id="wd-modules">

  
  <ModulesControls 
  setModuleName={setModuleName} 
  moduleName={moduleName} 
  addModule={() => {
    dispatch(addModule({ name: moduleName, course: cid }));
    setModuleName("");
  }}/>
  <br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
    {module_list.map((module:any) => (
      <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <div>
            <BsGripVertical className="me-4 fs-3" />
            {!module.editing && module.name}
            { module.editing && (
            <input className="form-control w-50 d-inline-block"
               onChange={(e) =>  dispatch(
                updateModule({ ...module, name: e.target.value }) 
              )}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                   dispatch(updateModule({ ...module, editing: false }));
                 }
               }}
               value={module.name}/>
      )}

          </div>
          <div>
            <ModuleControlsButtons
        moduleId={module._id}
        deleteModule={(moduleId) => {
          dispatch(deleteModule(moduleId));
        }}
        editModule={(moduleId) => dispatch(editModule(moduleId))}/>

          </div>
        </div>
          <ul id="wd-modules" className="wd-lessons list-group rounded-0">
            {/*}
            {modules.filter((module:any) => module.course === cid)
              .map((module: any) => (
              */}
               {module.lessons?.map((lesson:any) =>(

              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                {lesson.name}
                <LessonControlButtons />
              </li>
            ))}
          </ul>
      </li>
    ))}

  
  </ul>
</div>
  );}