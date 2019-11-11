import React from "react";
import Transformer from "image/transformer/transformer";
import * as MaterialUI from "@material-ui/core";
import Translator from "image/translator/translator";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    container: {
      width: 0,
      height: 0,
      pointerEvents: "none"
    },
    img: {
      display: "inline-block",
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  };
});

const Image = props => {
  const { data } = props;
  const [state, setState] = React.useState({ type: null, id: null });
  const [theData, setData] = React.useState(data);
  const classes = useStyles();

  React.useEffect(() => {
    const onMouseDown = e => {
      if (e.target.classList.contains("transformer")) {
        setState({ type: "transformer", id: e.target.id });
      } else if (e.target.classList.contains("translator")) {
        setState({ type: "translator", id: e.target.id });
      }
      e.preventDefault();
    };
    const onMouseUp = e => {
      setState({ type: null, id: null });
      e.preventDefault();
    };
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <div className={classes.container}>
      <Translator data={theData} setData={setData} imageState={state}>
        <Transformer data={theData} setData={setData} imageState={state}>
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
