import React from "react";
import { Link } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Nest from "./Nest";

const Profile = (props) => {
  let { path, url } = useRouteMatch();
  let { count, setCount } = props;

  console.log(path);
  console.log(url);
  return (
    <div>
      <h1>Hello from Profile</h1>
      <h3>Count is now: {props.count}</h3>
      <button type="button" onClick={props.handleClick}>
        Increment
      </button>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/">Go to App page</Link>

      <br></br>
      <Link to={`${url}/Nest`}>Take me to the nest</Link>

      <Switch>
        <Route
          path={`${path}/Nest`}
          render={(props) => (
            <Nest {...props} count={count} setCount={setCount} />
          )}
        />
      </Switch>
    </div>
  );
};

export default Profile;
