import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

class MyImageGallery extends Component {
  render() {
    const properties = {
      thumbnailPosition: "left",
      useBrowserFullscreen: false,
      showPlayButton: false,
      items: [
        {
          original: "static/images/lure1.png",
          thumbnail: "static/images/lure1.png"
        },
        {
          original: "static/images/lure2.png",
          thumbnail: "static/images/lure2.png"
        },
        {
          original: "static/images/lure3.png",
          thumbnail: "static/images/lure3.png"
        }
      ]
    };

    return <ImageGallery {...properties} />;
  }
}

export default MyImageGallery;
