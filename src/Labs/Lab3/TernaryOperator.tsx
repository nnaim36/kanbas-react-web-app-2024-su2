export default function TernaryOperator(){
  let loggedIn =true;
  return(
    <div>
      <h3>Ternary Conditional Operator</h3>
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
      <hr />
    </div>
  );
}