import React from "react";
import ReactDOM from "react-dom";
import * as MaterialUI from "@material-ui/core";
import Image from "image/image";
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
    y: 200,
    translateX: 0,
    translateY: 0,
    scaledWidth: 100,
    scaledHeight: 100,
    width: 100,
    height: 100,
    src: "https://source.unsplash.com/random/1000x1000",
    alt: "random",
    id: "123",
    index: 1
  };

  const imageData2 = {
    x: 400,
    y: 200,
    translateX: 0,
    translateY: 0,
    scaledWidth: 100,
    scaledHeight: 100,
    width: 100,
    height: 100,
    src: "https://source.unsplash.com/random/1000x1000",
    alt: "random",
    id: "124",
    index: 2
  };

  return (
    <div className={classes.app}>
      <Image data={imageData} />
      <Image data={imageData2} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
