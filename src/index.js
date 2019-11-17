import React from "react";
import ReactDOM from "react-dom";
import * as MaterialUI from "@material-ui/core";
import Image from "./image";
import "./styles.css";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    app: {
      position: "relative",
      width: "100%",
      height: "100%"
    },
    container: {
      width: 500,
      height: 500,
      border: "1px solid red",
      position: "relative",
      overflow: "hidden",
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
  const [transform, setTransform] = React.useState(false);

  return (
    <div className={classes.app}>
      <div ref={containerRef} className={classes.container}>
        <Image
          data={imageData}
          onStartUpdate={e => {
            console.log("Update starting", e);
          }}
          containerRef={containerRef}
          selected={transform}
          onEndUpdate={e => {
            console.log("End update", e);
          }}
        />
      </div>
      <button onClick={() => setTransform(!transform)}>Deselect</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
