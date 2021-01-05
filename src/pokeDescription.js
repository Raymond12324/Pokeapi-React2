import "./PokeDescription.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//mport back from "./back3.png";

//material ui comoponents
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

//chart
import { Radar } from "react-chartjs-2";
const useStyles = makeStyles({
  root: {
    minWidth: 310,
    maxWidth: 3000,
    margin: 0,
    boxShadow: "0 3px 5px 2px ",
  },
  media: {
    height: 400,
    width: 310,
    margin: "auto",
  },
  media2: {
    height: 440,
    width: 310,
    margin: "auto",
  },
  fondo: {
    //backgroundImage: `url(${back})`,
    // backgroundSize: 550,
    //backdropFilter: "blur(3px)",
    backgroundColor: "#cccccc",
  },

  sombra: {
    boxShadow: "0 3px 5px 2px ",
    margin: 20,
  },
});

function PokeDescription({ match }) {
  const url = `https://pokeapi.co/api/v2/pokemon/${match.params.id}`;
  var pokesArr = [];
  const [personaje, setPersonaje] = useState([]);

  useEffect(() => {
    fetchPersonaje();
  }, []);

  const fetchPersonaje = async () => {
    const fetchItem = await fetch(url);
    const item = await fetchItem.json();
    console.log(item);
    pokesArr.push(item);
    setPersonaje(pokesArr);
  };

  const classes = useStyles();
  return personaje.map((item) => {
    return (
      <>
        <Grid
          className={classes.root}
          container
          justify="center"
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <CardActionArea className={classes.fondo}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                <b>{item.name.toUpperCase()}</b>
              </Typography>
              <Divider className={classes.sombra}></Divider>
              <Typography variant="body2" component="p">
                <CardMedia
                  className={classes.media}
                  image={item.sprites.other["official-artwork"].front_default}
                  title={item.name}
                />
                <Typography
                  gutterBottom
                  variant="p"
                  component="p"
                  align="center"
                  color="textSecondary"
                >
                  ArtWork
                </Typography>
                <Divider className={classes.sombra}></Divider>
                <CardMedia
                  className={classes.media2}
                  image={item.sprites.front_default}
                  title={item.name}
                />

                <Divider className={classes.sombra}></Divider>

                <Typography
                  variant="body2"
                  color=""
                  component="p"
                  align="center"
                  color="textSecondary"
                >
                  <h3 color="primary">Abilities</h3>
                  {item.abilities.map((item) => {
                    return <ul>{item.ability.name}</ul>;
                  })}
                </Typography>
              </Typography>
              <Divider className={classes.sombra}></Divider>

              <Radar
                data={{
                  labels: [
                    item.stats[0].stat.name,
                    item.stats[1].stat.name,
                    item.stats[2].stat.name,
                    item.stats[3].stat.name,
                    item.stats[4].stat.name,
                    item.stats[5].stat.name,
                  ],
                  datasets: [
                    {
                      label: "Stats",
                      data: [
                        item.stats[0].base_stat,
                        item.stats[1].base_stat,
                        item.stats[2].base_stat,
                        item.stats[3].base_stat,
                        item.stats[4].base_stat,
                        item.stats[5].base_stat,
                      ],
                      backgroundColor: [
                        "rgba(255, 51, 51, 0.5)",
                        "rgba(88, 19, 236, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                      ],
                      borderColor: [
                        "rgba(0, 0, 0, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                      ],
                      borderWidth: 2,
                      defaultFontSize: 3,
                    },
                  ],
                }}
              ></Radar>

              <Divider className={classes.sombra}></Divider>

              <Typography
                variant="body2"
                color=""
                component="p"
                color="textSecondary"
                align="center"
              >
                <h3 color="primary">Type</h3>

                {item.types.map((item) => {
                  return <ul>{item.type.name}</ul>;
                })}
              </Typography>
              <Divider className={classes.sombra}></Divider>
              <Typography
                variant="body2"
                component="p"
                color="textSecondary"
                align="center"
              >
                <h3>Weight</h3>
                <ul>{item.weight}</ul>
              </Typography>
              <Divider className={classes.sombra}></Divider>
              <Typography
                variant="body2"
                component="p"
                color="textSecondary"
                align="center"
              >
                <h3>Height</h3>
                <ul>{item.height}</ul>
              </Typography>
              <Divider className={classes.sombra}></Divider>
              <Typography
                variant="body2"
                component="p"
                color="textSecondary"
                align="center"
              >
                <h3 color="primary">Moves</h3>
                <ul>
                  {/*item.moves.map((item2) => {
                      return <ul>{item2.move.name}</ul>;
                    })*/}
                </ul>
              </Typography>
              <Divider className={classes.sombra}></Divider>
              <Link to="/">
                <Button color="secondary" variant="contained">
                  Home
                </Button>
              </Link>
            </CardContent>
          </CardActionArea>
        </Grid>
      </>
    );
  });
}

export default PokeDescription;
