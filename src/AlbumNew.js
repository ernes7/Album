import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import DeleteIcon from "@material-ui/icons/Delete";

import Top from "./top";
import Foot from "./foot";
//import { useStyles } from "./styles";

class AlbumNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title: "Flower",
          desc: "Picture of flower"
        },
        {
          title: "Taco",
          desc: "Mexican Taco"
        },
        {
          title: "Cuba",
          desc: "Beach of Cuba"
        },
        {
          title: "Mexico",
          desc: "Summer in Mexico"
        },
        {
          title: "Seattle",
          desc: "My Trip to Seattle"
        },
        {
          title: "PSU",
          desc: "My new school"
        }
      ]
    };
  }
  handleDeletion = event => {
    //delete from the state by filtering
    this.setState({
      cards: this.state.cards.filter(card => {
        return card.title !== event.currentTarget.value;
      })
    });
  };
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon />
            <Typography variant="h6" color="inherit" noWrap>
              Material UI Drill
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Top />
          <Container maxWidth="md">
            <Grid container spacing={4}>
              {this.state.cards.map(card => (
                <Grid item key={card.title} xs={12} sm={4} md={4}>
                  <Card>
                    <CardMedia
                      image="https://source.unsplash.com/random"
                      title={card.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography>{card.desc}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button value={card.title} onClick={this.handleDeletion}>
                        <DeleteIcon color="secondary" />
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <Foot />
      </React.Fragment>
    );
  }
}

export default AlbumNew;
