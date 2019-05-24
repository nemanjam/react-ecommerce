import React, { Component } from "react";
import Carousel from "nuka-carousel";
import { withStyles } from "@material-ui/core/styles";

import ProductCard from "../views/ProductCard";

const styles = {
  eachSlide: {
    //height: 300
  }
};

const properties = {
  autoplay: true,
  cellSpacing: 30,
  slidesToShow: 4,
  wrapAround: true,
  autoplayInterval: 3000,
  cellAlign: "center",
  speed: 2000
};

class BottomCarousel extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Carousel {...properties}>
        <ProductCard className={classes.eachSlide} />
        <ProductCard className={classes.eachSlide} />
        <ProductCard className={classes.eachSlide} />
        <ProductCard className={classes.eachSlide} />
        <ProductCard className={classes.eachSlide} />
        <ProductCard className={classes.eachSlide} />
        <ProductCard className={classes.eachSlide} />
      </Carousel>
    );
  }
}

export default withStyles(styles)(BottomCarousel);
