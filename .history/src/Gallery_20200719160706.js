import React, { Component } from "react";

class Gallery extends Component {
  playAudio(previewUrl) {
    let audio = new Audio(previewUrl);
    audio.play();
  }
  render() {
    const { tracks } = this.props;
    return (
      <div>
        {tracks.map((track, index) => {
          const trackImg = track.album.images[0].url;
          return (
            <div
              key={index}
              className="track"
              onClick={() => this.playAudio(track.preview_url)}
            >
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
