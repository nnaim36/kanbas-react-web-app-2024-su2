import {FaPlus} from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { MdDoNotDisturbAlt } from "react-icons/md";
import '../../../Kanbas/styles.css';

export default function ModulesControls(){
    return(
        <div id="wd-modules-controls" className="text-nowrap" >
            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end" >
                <FaPlus className="position-relative me-2" style={{bottom:"1px"}} />
                Module
            </button>
            <div className="dropdown d-inline me-1 float-end">
                <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle" 
                type="button" data-bs-toggle="dropdown">
                    <GreenCheckmark/>
                    Publish all
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
                            <GreenCheckmark/>
                            Publish all Modules and items
                        </a>
                    </li>
                    <li>
                        <a id="wd-publish-modules-only-btn" className="dropdown-item" href="#">
                            <GreenCheckmark/>
                            Publish modules only
                        </a>
                    </li>
                    <li>
                        <a id="wd-unpublish-all-modules-and-items-btn" className="dropdown-item" href="#">
                            <MdDoNotDisturbAlt/>
                            Unpublish all modules and items
                        </a>
                    </li>
                    <li>
                        <a id="wd-unpublish-all-modules-only-btn" className="dropdown-item" href="#">
                            <MdDoNotDisturbAlt/>
                            Unpublish modules only
                        </a>
                    </li>
                    {/*TODO EXand list*/}
                </ul>

            </div>
            <button id="wd-view-progress-all-btn" className="btn btn-lg me-1 btn-secondary">
                View Progress
            </button>
            <button id="wd-collapse-all-btn" className="btn btn-lg me-1 btn-secondary">
                Collapse All
            </button>
        </div>
    );
}
