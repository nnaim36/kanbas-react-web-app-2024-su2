import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";

export default function ModuleControlsButtons(){
    return(
        <div>
            <GreenCheckmark />
            <BsPlus className="fs-1" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}