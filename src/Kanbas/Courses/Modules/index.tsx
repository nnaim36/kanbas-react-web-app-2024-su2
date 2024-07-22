import ModulesControls from "./ModulesControls";
import ModuleControlsButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { modules } from "../../Database";

export default function Modules(){
  const test = useParams();
  const cid = test.id;
  const module_list = modules.filter((module) => module.course === cid );
  console.log("module value");
  console.log(module_list);
  return(
<div id="wd-modules">

  
  <ModulesControls /><br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
    {module_list.map((module) => (
      <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
          <div>
            <BsGripVertical className="me-4 fs-3" />
            {module.name}
          </div>
          <div>
            <ModuleControlsButtons/>
          </div>
        </div>
          <ul className="wd-lessons list-group rounded-0">
            {module.lessons?.map((lesson) =>(
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