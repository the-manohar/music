import React from "react";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="App-title">Music Master</div>
      <div>
        <input placeholder="search an artist..." />
        <button>Button</button>
      </div>
      <div className="Profile">
        <div>Artist Picture</div>
        <div>Artist Name</div>
      </div>
      <div className="Gallery">Gallery</div>
    </div>
  );
}

export default App;
