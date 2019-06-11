import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import ProductCard from "./ProductCard";

const styles = {
  root: {}
};

class BottomCarousel extends Component {
  render() {
    const { classes, className, ...rest } = this.props;
    const rootClassName = clsx(classes.root, className);

    return (
      <Grid
        container
        className={rootClassName}
        justify="space-between"
        spacing={3}
        {...rest}
      >
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(BottomCarousel);
