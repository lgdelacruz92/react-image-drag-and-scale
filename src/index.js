import React from "react";
import ReactDOM from "react-dom";
import * as MaterialUI from "@material-ui/core";
import "./styles.css";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    app: {
      position: "relative",
      width: "100%",
      height: "100%"
    }
  };
});

function App() {
  const classes = useStyles();
  const imageData = {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    src: "https://source.unsplash.com/random/200x200",
    alt: "random"
  };

  return <div className={classes.app} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
