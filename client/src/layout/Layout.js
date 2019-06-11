import React, { Component, Fragment } from "react";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const styles = theme => ({
  root: {
    // width: "auto",
    // marginLeft: theme.spacing(3),
    // marginRight: theme.spacing(3),
    // [theme.breakpoints.up(1140 + theme.spacing(3 * 2))]: {
    //   width: 1140,
    //   marginLeft: "auto",
    //   marginRight: "auto"
    // },
    paddingTop: "79px"
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
});

const Layout = props => {
  const { classes } = props;
  return (
    <Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        <div className={classes.root}>{props.children}</div>
      </main>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
