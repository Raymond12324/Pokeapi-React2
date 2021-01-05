import React from "react";

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

function Search() {
  const searchValue = React.useRef("");
  console.log(searchValue);

  const classes = useStyles();
  return (
    <div>
      <br></br>
      <form action="">
        <input type="text" id="name" ref={searchValue} />
      </form>

      {/*<TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        className={classes.center}
      />*/}
    </div>
  );
}

export default Search;
