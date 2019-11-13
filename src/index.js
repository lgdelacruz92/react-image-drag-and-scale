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
    },
    container: {
      width: 600,
      height: 600,
      border: "1px solid red",
      position: "absolute",
      top: 50,
      left: 50
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

  const containerRef = React.useRef();

  return (
    <div className={classes.app}>
      <div ref={containerRef} className={classes.container}>
        <Image data={imageData} containerRef={containerRef} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
