import EnvironmentVariables from "./EnvironmentVariables";
import HttpClient from "./HttpClient";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function Lab5(){
  console.log("remote server val:",REMOTE_SERVER);
  return (
    <div>
      <h1>Lab 5</h1>
      <h2>welcome</h2>
      <div className="list-group">
        <HttpClient />
        <a href={`${REMOTE_SERVER}/lab5/welcome`}
        className="list-group-item">
          Welcome
        </a>
      </div>
      <hr />
      <EnvironmentVariables />

      <PathParameters />

      <QueryParameters />

      <WorkingWithObjects/>

      <WorkingWithArrays />

      <HttpClient />

      <WorkingWithObjectsAsynchronously />

      <WorkingWithArraysAsynchronously />

    </div>
  );
}
