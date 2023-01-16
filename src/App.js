import React, { Component } from "react";
import Game from "./Game";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
        <p style={{ paddingTop: "20px" }}>
          Built by Karol Lann Vel Lace for learning purposes. Based on The
          Modern React Bootcamp Course by Colt Steele.
        </p>
      </div>
    );
  }
}

export default App;
