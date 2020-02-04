import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import SignIn from "./components/signIn/SignIn";
import Home from "./components/home/Index";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={SignIn} />
        <Route path="/home" component={Home} />
      </Router>
    </div>
  );
}
export default App;