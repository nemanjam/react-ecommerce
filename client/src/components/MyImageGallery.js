import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import MyReactImageMagnify from "./MyReactImageMagnify";

class MyImageGallery extends Component {
  myRenderItem() {
    return <MyReactImageMagnify {...this.props} />;
  }

  render() {
    const properties = {
      thumbnailPosition: "left",
      useBrowserFullscreen: false,
      showPlayButton: false,
      renderItem: this.myRenderItem.bind(this),
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
