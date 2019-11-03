import React from "react";
import Transformer from "./transformer";
import * as MaterialUI from "@material-ui/core";
import Translator from "./translator";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    container: {
      width: 0,
      height: 0
    },
    img: {
      display: "inline-block",
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  };
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Image = props => {
  const { data } = props;
  const [state, setState] = React.useState(data);
  const classes = useStyles();
  const updateData = newData => {
    setState({ ...newData });
  };

  const randTransform = e => {
    state.width = getRandomInt(200, 300);
    state.height = getRandomInt(200, 400);
    setState({ ...state });
  };

  const randTranslate = e => {
    state.x = getRandomInt(0, window.innerWidth - state.width);
    state.y = getRandomInt(0, window.innerHeight - state.height);
    setState({ ...state });
  };

  return (
    <div className={classes.container}>
      <button onClick={randTransform}>Tranform</button>
      <button onClick={randTranslate}>Translate</button>
      <Translator data={state} updateData={updateData}>
        <Transformer data={state} updateData={updateData}>
          <img
            className={classes.img}
            onLoad={() => console.log("Image loading")}
            src={data.src}
            alt={data.alt}
          />
        </Transformer>
      </Translator>
    </div>
  );
};

export default Image;
