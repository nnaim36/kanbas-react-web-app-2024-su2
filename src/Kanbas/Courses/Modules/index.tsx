import React, { useState,useEffect  } from "react";
import ModulesControls from "./ModulesControls";
import ModuleControlsButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { useParams } from "react-router-dom";
import * as client from "./client";
//import * as db from "../../Database";
//import { modules } from "../../Database";
import { setModules,addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { FaPencil, FaPlus, FaTrash } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";


export default function Modules(){
  const test = useParams();
  const cid = test.cid;
  //const module_list = modules.filter((module) => module.course === cid );
  //const [modules, setModules] = useState<any[]>(db.modules);
  //const [moduleName, setModuleName] = useState("");
  const [moduleName, setModuleName] = useState("");
  const [editing, setEditing] = useState("");
  
  //const { modules } = useSelector((state: any) => state.modulesReducer);
  const [modules, setModules] = useState<any[]>([]);
  const dispatch = useDispatch();

  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
    fetchModules();
  };


  const deleteModule2 = async (mid:string) =>{
    await client.deleteModule(mid);
    fetchModules();
  };
  const saveModule = async (module: any) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
    fetchModules();
  };

  /*
  const createModule = async (module: any) => {
    const newModule = await client.createModule(cid as string, module);
    dispatch(addModule(newModule));
  };
*/
const createModule = async (module2: any) =>{
  const module = await client.createModule({
      name:moduleName,
      courseid:cid,
  });
  setModules([...modules,module]);
}

const createModule2 = async () =>{
  console.log("cid value inside create testing:",{cid});
  const module = await client.createModule({
      name:moduleName,
      courseid:cid,
      lessions:"",
      description:"something"
  });
  setModules([...modules,module]);
}

const saveModule2 = async (module:any) => {
  console.log("the eddited module is:",module);
  const updatedModule = {...module, name:moduleName};
  console.log("the NEw eddited module is:",updatedModule);
  await client.updateModule(updatedModule)
  fetchModules();
}

  const fetchModules = async () => {
    console.log("cid:",cid);
    //const modules = await client.findModulesForCourse(cid as string);
    const modules = await client.fetchAllModules();
    const module_list = modules.filter((module:any) => module.courseid === cid );
    console.log("modules:",modules);
    console.log("module list:",module_list);
    setModules(module_list);
  };
  useEffect(() => {
    fetchModules();
  }, []);

  
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


  //console.log("module value",modules);
  //console.log(modules);
  //const module_list = modules.filter((module:any) => module.courseid === cid );
  
  return(
<div id="wd-modules">

  
  <ModulesControls 
  modules = {modules}
  setModules = {setModules}
  setModuleName={setModuleName} 
  moduleName={moduleName} 
  addModule={() => {
    createModule({  moduleName,cid });
    setModuleName("");
  }}
  />

  <br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
    {modules.map((module:any) => (
      <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <div>
            <BsGripVertical className="me-4 fs-3" />
            {editing !== module._id && module.name}
            { editing === module._id && (
            <input type="text" className="form-control w-50 d-inline-block"
               onChange={(e) =>  setModuleName(e.target.value)}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                  
                  setEditing("")
                  saveModule2(module);
                 }
               }}
               defaultValue={module.name}/>

               
            
      )}
          </div>
          <div>
          {/*
            <FaPencil onClick={() => editModule(module._id)} className="text-primary me-3" />
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(module._id)}/>
            <GreenCheckmark />
            <BsPlus className="fs-1" />
            <IoEllipsisVertical className="fs-4" />
            */}

            <ModuleControlsButtons
        moduleId={module._id}
        setEditing={setEditing}
        deleteModule={(moduleId) => {removeModule(moduleId);}}
        editModule = {(moduleId) => {
          console.log(moduleId);
          dispatch(editModule(moduleId))
          }}/>

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