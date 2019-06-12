import React, { Component } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
    margin: "auto"
  },
  media: {
    height: 140
  }
};

class ProductCard extends Component {
  state = {
    images: [
      "countdown_cd05b.png",
      "countdown_cd05rt.png",
      "countdown_cd07g.png",
      "lure1.png",
      "lure2.png",
      "lure3.png",
      "shad_rap_sr05s.png",
      "shad_rap_sr07yp.png"
    ]
  };

  getImage = () => {
    const index = Math.floor(Math.random() * 8);
    const image = this.state.images[index];
    return `static/images/${image}`;
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} elevation={6} raised>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={this.getImage()}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
              {/* {Math.random()} */}
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" component={Link} to="/product">
            Product
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCard);
