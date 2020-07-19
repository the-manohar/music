import React from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup, Button } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <div className="App-title">Music Master</div>
      <FormGroup>
        <InputGroup>
          <FormControl type="text" placeholder="Search for an Artist" />
          {/* <InputGroup.Addon>Search</InputGroup.Addon> */}
          <Button>Search</Button>
        </InputGroup>
      </FormGroup>
      <div className="Profile">
        <div>Artist Picture</div>
        <div>Artist Name</div>
      </div>
      <div className="Gallery">Gallery</div>
    </div>
  );
}

export default App;
