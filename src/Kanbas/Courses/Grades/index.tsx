import { MdOutlineFilterAlt } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { CiImport } from "react-icons/ci";
import { FaFileExport } from "react-icons/fa";

export default function Grades() {
    return(
        <div>
            <div className="d-flex justify-content-end">
                <button className="btn btn-lg btn-secondary me-1 text-nowrap">
                    <CiImport />
                    Import
                </button>
                <button className="btn btn-lg btn-secondary me-1 text-nowrap">
                    <FaFileExport />
                    Export
                </button>
                <button className="btn btn-lg btn-secondary me-1 text-nowrap">
                    <FaGear/>
                </button>
            </div>
            <div>
                {/*left and right*/}
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="wd-assignments-search-students" className="fs-3">Student Names</label>
                        <br />
                        <input type="text" placeholder="Search Students" 
                        id="wd-assignments-search-students" 
                        className="form-control"/>
                    </div>
                    <div className="col">
                        <label htmlFor="wd-assignments-search-assignments" className="fs-3">Assignment Names</label>
                        <br />
                        <input type="text" placeholder="Search Assignments" 
                        id="wd-assignments-search-assignments"
                        className="form-control"/>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-lg btn-secondary mt-4 mb-4 text-nowrap">
                    <MdOutlineFilterAlt/>
                    Apply Filters
                </button>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col" className="border border-secondary">
                            <label htmlFor="">student Name</label>
                        </th>
                        <th scope="col" className="border border-secondary text-center">
                            <label>A1 SETUP</label>
                            <br />
                            <label htmlFor="">out of 100</label>
                        </th>
                        <th scope="col" className="border border-secondary text-center">
                            <label>A2 SETUP</label>
                            <br />
                            <label>out of 100</label>
                        </th>
                        <th scope="col" className="border border-secondary text-center">
                            <label>A3 SETUP</label>
                            <br />
                            <label>out of 100</label>
                        </th>
                        <th scope="col" className="border border-secondary text-center">
                            <label>A4 SETUP</label>
                            <br />
                            <label>out of 100</label>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="text-danger border border-secondary">Mark Henry</th>
                            <td className="border border-secondary">
                                <input type="number" placeholder="0"/>%
                            </td>
                            <td className="border border-secondary">
                                <input type="number" placeholder="0"/>%
                            </td>
                            <td className="border border-secondary">
                                <input type="number" placeholder="0"/>%
                                </td>
                            <td className="border border-secondary">
                                <input type="number" placeholder="0"/>%
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-danger border border-secondary">Tod Guy</th>
                            <td className="border border-secondary">
                                <input type="number" placeholder="0"/>%
                            </td>
                            <td className="border border-secondary">
                                <input type="number" placeholder="0"/>%
                            </td>
                            <td className="border border-secondary">
                                <input type="number" placeholder="0"/>%
                            </td>
                            <td className="border border-secondary">
                                <input type="number" placeholder="0"/>%
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-danger border border-secondary">Nile</th>
                            <td className="border border-secondary">
                                <input type="number" placeholder="0"/>%
                            </td>
                            <td className="border border-secondary">
                                <input type="number" placeholder="0"/>%
                            </td>
                            <td className="border border-secondary">
                                <input type="number" placeholder="0"/>%
                            </td>
                            <td className="border border-secondary">
                                <input type="number" placeholder="0"/>%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}