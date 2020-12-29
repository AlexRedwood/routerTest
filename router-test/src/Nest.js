import { Link } from "react-router-dom";
import React from "react";

function Nest(props) {
  console.log(props);
  return (
    <div className="Nest">
      <h1>W E L C O M E TO THE N E S T </h1>
      {/* <h3>Count is: {props.count}</h3>
      <button type="button" onClick={props.handleClick}>
        Increment
      </button>
      <br></br>
      <br></br>
      <br></br> */}
      <p>Btw count is {props.count}</p>

      <Link to="/profile">Go to Profile page</Link>
    </div>
  );
}

export default Nest;
