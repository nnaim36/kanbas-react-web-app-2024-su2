import { useState } from "react";

export default function EncodingParametersInURLs(){
    const [a,setA] = useState(34);
    const [b,setB] = useState(23);
    return(
        <div>
            <h4>Calculator!</h4>
            <div className="list-group">
                <a href="http://localhost:4000/lab5/welcome"
                className="list-group-item">
                    Welcome
                </a>
            </div>
            <hr />
            {/*<input type="number" value={a} onChange={(e)}/>*/}
            <input type="number" value={b} />
            <h3>Path Parameters</h3>
            <a href={`http://localhost:4000/lab5/add/`} ></a>
        </div>
    );
}