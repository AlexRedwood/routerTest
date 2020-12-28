import { Link } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <h1>Hello from App</h1>
      <h3>Count is: {props.count}</h3>
      <button type="button" onClick={props.handleClick}>
        Increment
      </button>
      <br></br>
      <br></br>
      <br></br>

      <Link to="/profile">Go to Profile page</Link>
    </div>
  );
}

export default App;
