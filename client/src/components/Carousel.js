import React, { Component } from "react";
import Carousel from "nuka-carousel";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  eachSlide: {
    height: 400,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0,0,0,.1)"
  }
};

class MyCarousel extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Carousel wrapAround={true}>
        <div
          className={classes.eachSlide}
          style={{ backgroundImage: `url(static/images/lure1.png)` }}
        />
        <div
          className={classes.eachSlide}
          style={{ backgroundImage: `url(static/images/lure2.png)` }}
        />
        <div
          className={classes.eachSlide}
          style={{ backgroundImage: `url(static/images/lure3.png)` }}
        />
      </Carousel>
    );
  }
}

export default withStyles(styles)(MyCarousel);
