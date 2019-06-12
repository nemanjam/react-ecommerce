import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import _ from "lodash";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import ProductCard from "../components/ProductCard";
import Layout from "../layout/Layout";

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing(2)
  },
  grid: {
    margin: "auto"
  }
});

class LikedProducts extends Component {
  componentDidMount() {}

  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <div className={classes.root}>
          <Container maxWidth="lg">
            <Grid className={classes.grid} container spacing={4} xs={12}>
              {_.range(5).map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </Layout>
    );
  }
}

LikedProducts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LikedProducts);
