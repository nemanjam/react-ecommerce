import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import _ from "lodash";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { getFeature } from "../actions/privateActions";
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";
import Layout from "../layout/Layout";

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing(2)
  },
  cardGrid: {}
});

class Products extends Component {
  componentDidMount() {
    // this.props.getFeature();
    // console.log(this.props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <div className={classes.root}>
          <Container maxWidth="lg">
            <Grid
              container
              spacing={3}
              alignItems="flex-start"
              justify="space-around"
            >
              <Grid
                container
                item
                xs={12}
                sm={4}
                md={3}
                lg={2}
                spacing={2}
                alignItems="stretch"
                direction="column"
              >
                <Grid item>
                  <ProductList />
                </Grid>
                <Grid item>
                  <ProductList />
                </Grid>
              </Grid>
              <Grid
                container
                item
                spacing={4}
                xs={12}
                sm={8}
                md={9}
                lg={10}
                alignItems="flex-end"
              >
                {_.range(10).map((item, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <ProductCard />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Container>
        </div>
      </Layout>
    );
  }
}

Products.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default compose(
  connect(
    mapStateToProps,
    { getFeature }
  ),
  withStyles(styles)
)(Products);
