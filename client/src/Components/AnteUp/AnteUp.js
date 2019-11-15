import React from "react";
import "./AnteUp.css";

class AnteUp extends React.Component {
  render() {
    return (
      <div id="anteUp">
        <form>
          <input type="text" name="AnteUp" />
          <button>Bet Red</button>
          <button>Bet Black</button>
        </form>
      </div>
    );
  }
}

export default AnteUp;
