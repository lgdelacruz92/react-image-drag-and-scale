import React from "react";
import ReactDOM from "react-dom";
import Image from "./image";
import * as MaterialUI from "@material-ui/core";
import Translator from "./translator";
import Transformer from "./transformer";
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
  const [state, setState] = React.useState(imageData);
  const update = newState => {
    setState({ ...newState });
  };

  return (
    <div className={classes.app}>
      <Translator data={state} update={update}>
        <Transformer data={state} update={update}>
          <Image imageData={state} />
        </Transformer>
      </Translator>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
