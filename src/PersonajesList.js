import "./PersonajesList.css";

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import back from "./back.gif";

import Personaje from "./Personaje";
function PersonajesList() {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fechtPersonajes = async () => {
    var pokesArr = [];
    var objetoPokemon = {};
    console.log(pokesArr.length);
    if (pokesArr.length === 0) {
      for (var i = 1; i < 50; i++) {
        // pokemon 186 no se encuentra
        if (i !== 186 && i !== 393) {
          const response = await fetch(`${url}${i}`);
          const data = await response.json();
          pokesArr.push(data);
          console.log("se llamo");
          console.log(pokesArr.length);
        }
      }
    } else {
      pokesArr.map((item) => {
        return item;
      });
    }
    if (pokesArr.length > 0) {
      setPersonajes(pokesArr);
      setLoading(false);
    }
  };

  useEffect(() => {
    fechtPersonajes();
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      margin: theme.spacing(4),
      padding: theme.spacing(4),
      textAlign: "center",
      alignItems: "center",
      color: "black",

      backgroundImage: `url(${back})`,
      backgroundSize: 550,
      backdropFilter: "blur(10px)",
      backgroundColor: "#FFfff",
      boxShadow: "0 3px 5px 2px ",
    },
  }));

  const classes = useStyles();

  return (
    <Grid container spacing={12}>
      {loading ? <div class="lds-hourglass"></div> : ""}

      {personajes.map((item) => {
        return (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Paper className={classes.paper}>
              <Personaje className="grid-item" key={item.id} {...item} />
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default PersonajesList;
