import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AgeVar from "./components/ageVar/ageVar.js";
import "./components/ageVar/ageVar.css";
import TopNav from "./components/TopNav/TopNav.js";
import Jumbo from "./components/Jumbotron/Jumbo.js";

function App() {
  return (
    <div>
      <TopNav />
      <Jumbo />
      <Router>
        <div></div>
      </Router>
    </div>
  );
}

export default App;
