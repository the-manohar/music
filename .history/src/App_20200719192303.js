import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup, Button } from "react-bootstrap";
import Profile from "./Profile";
import Gallery from "./Gallery";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      artist: null,
      tracks: [],
      token: "",
    };
  }

  search() {
    console.log(this.state);
    const BASE_URL = `https://api.spotify.com/v1/search?`;
    let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    const ALBUM_URL = `https://api.spotify.com/v1/artists/`;
    // const token =
    //   "BQAUInlC15Ij22-MmZC6uGbrwWKFCq2xfMnD6KWQbCAUwRnjwszOriQ6Uahl5S0k7IV6bVfp0YXicGwez0c";
    const clientId = "5c909f4c3ff6406ba9ee3e544ef8da46";
    const clientSecret = "765a6ae9ba6b4edc993dbf1c96aea081";
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    })
      .then((res) => res.json())
      .then((json) => {
        return this.setState({ token: json.access_token });
      });

    fetch(FETCH_URL, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const artist = json.artists.items[0];
        this.setState({ artist });

        FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`;
        fetch(FETCH_URL, {
          method: "GET",
          headers: { Authorization: "Bearer " + token },
        })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            const tracks = json.tracks;
            this.setState({ tracks });
          });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <div>
          Created By <span style={{ color: "red" }}>Manohar Sirvi</span>
        </div>

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
        {this.state.artist ? (
          <div>
            {this.state.artist !== null ? (
              <div>
                <Profile artist={this.state.artist} />
                <Gallery tracks={this.state.tracks} />
              </div>
            ) : (
              <div> </div>
            )}
          </div>
        ) : (
          <div>Not Found</div>
        )}
      </div>
    );
  }
}

export default App;
