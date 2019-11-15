import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopNav from "./Components/TopNav/TopNav";
import StreamBox from "./Components/Carousel/Carousel";
import Chat from "./Components/Chat/Chat";
import Stream from "./Components/Stream";
import AnteUp from "./Components/AnteUp/AnteUp.js";
import Auth from "./Components/Auth";
import "./base.css";

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <AnteUp />
        <Stream />
      </div>
    </Router>
  );
}

export default App;
