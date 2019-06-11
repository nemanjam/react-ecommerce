import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import { Typography, Button, Paper } from "@material-ui/core";

import Layout from "../layout/Layout";
import MyCarousel from "../components/MyCarousel";
import BottomCarousel from "../components/BottomCarousel";

const styles = theme => ({
  carousel: {},
  featured: {
    marginBottom: "1rem",
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem"
  },
  bottomCarousel: {},
  paper: { padding: "1rem", marginBottom: "1rem" }
});

class Home extends Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { classes } = this.props;
    return (
      <Layout>
        <MyCarousel className={classes.carousel} />
        <div className={classes.featured}>
          <Typography color="primary" variant="h5">
            Featured products
          </Typography>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            component={Link}
            to="/products"
          >
            All products
          </Button>
        </div>
        <BottomCarousel className={classes.bottomCarousel} />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  withStyles(styles)
)(Home);
