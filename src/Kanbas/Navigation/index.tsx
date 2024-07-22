
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
import { Link, useLocation } from "react-router-dom";
import './index.css';


export default function KanbasNavigation() {
  const {pathname} = useLocation();
  const links =[
    {label:'Dashboard', path: "/kanbas/Dashboard", icon:AiOutlineDashboard},
    {label:'Courses', path: "/kanbas/Dashboard", icon:LiaBookSolid},
    {label:'Calendar', path: "/kanbas/Calendar", icon:SlCalender},
    {label:'Inbox', path: "/kanbas/Inbox", icon:GoInbox},
    {label:'Labs', path: "/Labs", icon:ImLab},
  ];

  return(
    <div id="wd-kanbas-navigation" style={{ width: 120 }}
    className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a href="https://www.northeastern.edu/" id="wd-account-link" target="_blank"
      className="list-group-item bg-black border-0">
        {/*<img src="" width="75px" />*/}
        Northeastern
      </a>
      <Link key="/Kanbas/Account" to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <MdAccountBox className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </Link>
      ))}

    </div>
    
  );

}
  

