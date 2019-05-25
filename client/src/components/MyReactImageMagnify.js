import React, { Component } from "react";

import ReactImageMagnify from "react-image-magnify";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {}
});

class MyReactImageMagnify extends Component {
  render() {
    return (
      <ReactImageMagnify
        {...this.props}
        {...{
          smallImage: {
            alt: "Wristwatch by Ted Baker London",
            isFluidWidth: true,
            src: "static/images/product.png"
          },
          largeImage: {
            src: "static/images/product.png",
            width: 1200,
            height: 1800
          },
          enlargedImageContainerStyle: {
            zIndex: "1500"
          },
          enlargedImageContainerDimensions: {
            width: "100%",
            height: "100%"
          }
        }}
      />
    );
  }
}

export default withStyles(styles)(MyReactImageMagnify);
