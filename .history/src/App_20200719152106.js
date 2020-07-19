import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup, Button } from "react-bootstrap";
import Profile from "./Profile";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      artist: null,
    };
  }

  search() {
    console.log(this.state);
    const BASE_URL = `https://api.spotify.com/v1/search?`;
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const token =
      "BQB3k7ZkEP9hWNnSW4khb18DF4wbhcN2rU48Vi0FE6t5W1Q1UALGj1voB2bscGF5wINGAe2pp3v-MN5IULw";
    fetch(FETCH_URL, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const artist = json.artists.items[0];
        this.setState({ artist });
      });
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
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            {/* <InputGroup.Addon>Search</InputGroup.Addon> */}
            <Button onClick={() => this.search()}>Search</Button>
          </InputGroup>
        </FormGroup>
        {this.state.artist !== null ? (
          <div>
            <Profile artist={this.state.artist} />
            <div className="Gallery">Gallery</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default App;
