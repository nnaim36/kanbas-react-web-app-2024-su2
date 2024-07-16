
/**/
/*
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import {FaAccusoft} from "react-icons/fa";
*/
import { MdAccountBox } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import { GoInbox } from "react-icons/go";
import { TbCircleLetterN } from "react-icons/tb";
import { ImLab } from "react-icons/im";
import './index.css';
export default function KanbasNavigation() {
    return (
      <div id="wd-kanbas-navigation" style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
        <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/" className="list-group-item bg-black border-0 text-white">Northeastern</a>
        <a id="wd-account-link" href="#/Kanbas/Account"
        className="list-group-item text-white
        bg-black text-center border-0">
<MdAccountBox className="fs-1 text text-white" />
          <br />
        Account</a>
        <a id="wd-dashboard-link" href="#/Kanbas/Dashboard"
        className="list-group-item text-center border-0
        bg-white text-danger">
<AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard</a>
        <a id="wd-course-link" href="#/Kanbas/Courses"
        className="list-group-item text-white
        bg-black text-center border-0">
<LiaBookSolid className="fs-1 text-danger" />
        <br />Courses</a>
        <a id="wd-calendar-link" href="#/Kanbas/Calendar"
          className="list-group-item text-white
          bg-black text-center border-0">
  <SlCalender className="fs-1 text-danger" />
            <br />Calendar</a>
        <a id="wd-inbox-link" href="#/Kanbas/Inbox"
        className="list-group-item text-white
        bg-black text-center border-0">
<GoInbox className="fs-1 text-danger" />
          <br />Inbox</a>
        <a id="wd-labs-link" href="#/Labs"
        className="list-group-item text-white
        bg-black text-center border-0">
<ImLab className="fs-1 text-danger" />
          <br />Labs</a>
      </div>
  );}
  /**/

  /*
  export default function KanbasNavigation() {
    return (
      <ul id="wd-kanbas-navigation">
        <li><a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/">Northeastern</a></li>
        <li><a id="wd-account-link" href="#/Kanbas/Account">Account</a></li>
        <li><a id="wd-dashboard-link" href="#/Kanbas/Dashboard">Dashboard</a></li>
        <li><a id="wd-course-link" href="#/Kanbas/Courses">Courses</a></li>
        <li><a id="wd-calendar-link" href="#/Kanbas/Calendar">Calendar</a></li>
        <li><a id="wd-inbox-link" href="#/Kanbas/Inbox">Inbox</a></li>
        <li><a id="wd-labs-link" href="#/Labs">Labs</a></li>
      </ul>
  );}

  */