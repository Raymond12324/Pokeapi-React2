import "./Personaje.css";

import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";

function Personaje(props) {
  return (
    <div className="">
      <div>
        <div>
          <h1>{props.name.toUpperCase()}</h1>
        </div>
        <img
          variant="top"
          height="200"
          src={props.sprites.other["official-artwork"].front_default}
        />
      </div>

      <Link to={`description/${props.id}`}>
        <Button size="small" variant="contained" color="secondary">
          More
        </Button>
      </Link>
    </div>
  );
}

export default Personaje;
