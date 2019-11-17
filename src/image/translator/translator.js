import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    translator: {
      fontSize: 0,
      position: "absolute",
      transform: props => `translate(${props.x}px, ${props.y}px)`,
      zIndex: props => props.index
    },
    overlay: {
      position: "absolute",
      transform: props =>
        `translate(${props.x + props.translateX + 5}px,${props.y +
          props.translateY +
          5}px)`,
      width: props => props.scaledWidth - 10,
      height: props => props.scaledHeight - 10,
      pointerEvents: "auto",
      zIndex: props => props.index + 1
    }
  };
});

const Translator = props => {
  const { children, data, onContextMenu } = props;
  const classes = useStyles(data.data);

  return (
    <React.Fragment>
      <div
        className={`${classes.overlay} translator ${data.imageId}`}
        onContextMenu={onContextMenu}
      />
      <div className={classes.translator}>{children}</div>
    </React.Fragment>
  );
};

export default Translator;
