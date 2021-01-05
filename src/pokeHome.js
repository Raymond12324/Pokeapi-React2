import React from "react";

import PersonajesList from "./PersonajesList";
//import Search from "./Search";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#fffff",
  },
  center: {
    position: "relative",
    left: 30,
  },
});

function PokeHome() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.root}>
        <br />

        <Typography component="h1" color="textPrimary" align="center">
          <h1 color="textPrimary">PokeWeb</h1>
        </Typography>
        <PersonajesList></PersonajesList>
      </Container>
    </>
  );
}

export default PokeHome;
