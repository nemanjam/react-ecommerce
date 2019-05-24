import React from "react";
import { Slide } from "react-slideshow-image";

import { withStyles } from "@material-ui/core/styles";

const styles = {
  eachSlide: {
    height: 400,
    backgroundSize: "cover"
  }
};

const slideImages = [
  "static/images/lure1.png",
  "static/images/lure2.png",
  "static/images/lure3.png"
];

const properties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

const Slideshow = props => {
  const { classes } = props;
  return (
    <Slide {...properties}>
      <div>
        <div
          className={classes.eachSlide}
          style={{ backgroundImage: `url(${slideImages[0]})` }}
        >
          <span>Slide 1</span>
        </div>
      </div>
      <div>
        <div
          className={classes.eachSlide}
          style={{ backgroundImage: `url(${slideImages[1]})` }}
        >
          <span>Slide 2</span>
        </div>
      </div>
      <div>
        <div
          className={classes.eachSlide}
          style={{ backgroundImage: `url(${slideImages[2]})` }}
        >
          <span>Slide 3</span>
        </div>
      </div>
    </Slide>
  );
};

export default withStyles(styles)(Slideshow);
