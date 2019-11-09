import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    container: {
      width: props => props.scaledWidth,
      height: props => props.scaledHeight,
      transform: props =>
        `translate(${props.translateX}px, ${props.translateY}px)`
    }
  };
});

const Container = props => {
  const { children, rect } = props;
  const classes = useStyles(rect);
  return <div className={classes.container}>{children}</div>;
};

export default Container;
