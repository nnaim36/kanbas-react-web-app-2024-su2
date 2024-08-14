import React, { useState, useEffect } from "react";
import * as client from "./client";
import { useParams } from "react-router-dom";

export default function ModuleEditor({ dialogTitle, moduleName, setModuleName, addModule, setModules,modules }:
    { dialogTitle: string; moduleName: string; setModuleName: (name: string) => void; addModule: () => void; setModules:(module:any) => void; modules:any}) {

      //const [modles, setModules] = useState<any[]>([]);
      const { cid } = useParams();

      /*
      const createModule = async () =>{
        const module = await client.createModule({
            name:moduleName,
            courseid:cid,
        });
        set
      }
        */

      const createModule = async () =>{
        
        const module = await client.createModule({
            name:{moduleName},
            courseid:cid
        });
        setModules([...modules,module]);
      }

      return (
        <div id="wd-add-module-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  {dialogTitle} </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <input className="form-control" value={moduleName} placeholder="Module Name"
                                   onChange={(e) => setModuleName(e.target.value)}/>
                                   </div>
                                   <div className="modal-footer">
                                     <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                       Cancel </button>
                                     <button onClick={addModule} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                                       Add Module </button>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           );
                         }
