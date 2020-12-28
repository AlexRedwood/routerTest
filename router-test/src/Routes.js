import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const Routes = () => {
  let [count, setCount] = useState(0);

  let handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <App
              {...props}
              count={count}
              setCount={setCount}
              handleClick={handleClick}
            />
          )}
        />
        <Route
          path="/profile"
          render={(props) => (
            <Profile
              {...props}
              count={count}
              setCount={setCount}
              handleClick={handleClick}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
