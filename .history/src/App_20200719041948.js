import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup, Button } from "react-bootstrap";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }

  search() {
    console.log(this.state);
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              value={this.state.query}
              onChange={(e) => this.setState({ query: e.target.value })}
            />
            {/* <InputGroup.Addon>Search</InputGroup.Addon> */}
            <Button onClick={() => this.search()}>Search</Button>
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
}

export default App;
