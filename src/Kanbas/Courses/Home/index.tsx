import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
    return (
      <div>
          <div className="d-flex">
            <div className="col-10">
              <Modules />
            </div>

            <div className="col-2 p-3">
              <CourseStatus />
            </div>
          </div>
      </div>
      );    
}