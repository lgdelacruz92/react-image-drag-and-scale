import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    translator: {
      fontSize: 0,
      display: "inline-block",
      transform: props => `translate(${props.x}px, ${props.y}px)`,
      position: "relative"
    },
    overlay: {
      position: "absolute",
      top: props => props.y + props.translateY + 5,
      left: props => props.x + props.translateX + 5,
      width: props => props.scaledWidth - 10,
      height: props => props.scaledHeight - 10,
      pointerEvents: "auto",
      zIndex: props => props.index - 1
    }
  };
});

const Translator = props => {
  const { children, data } = props;
  const classes = useStyles(data.data);

  return (
    <React.Fragment>
      <div className={classes.translator}>{children}</div>
      <div
        onClick={() => {
          console.log("Translator over lay is clicked", data.data.id);
        }}
        className={`${classes.overlay} translator`}
      />
    </React.Fragment>
  );
};

export default Translator;
