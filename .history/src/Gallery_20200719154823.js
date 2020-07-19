import React, { Component } from "react";

class Gallery extends Component {
  render() {
    const { tracks } = this.props;
    return (
      <div>
        {tracks.map((track, index) => {
          const trackImg = track.album.image[0].url;
          return (
            <div key={index} className="track">
              <img src={trackImg} className="track-img" alt="track" />
              <p className="track-text">{track.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
