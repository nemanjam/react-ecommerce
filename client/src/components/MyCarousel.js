import React, { Component } from "react";
import Carousel from "nuka-carousel";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {},
  eachSlide: {
    height: 400,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0,0,0,.1)"
  }
};

class MyCarousel extends Component {
  render() {
    const { classes, className, ...rest } = this.props;
    const rootClassName = clsx(classes.root, className);

    return (
      <Carousel wrapAround={true} className={rootClassName} {...rest}>
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
