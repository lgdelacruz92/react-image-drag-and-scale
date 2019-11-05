import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    transformingContainer: {
      width: props => props.width,
      height: props => props.height
    }
  };
});

const TransformingContainer = props => {
  const { transformingEvent, children } = props;
  const style = {
    width: transformingEvent.transform.width,
    height: transformingEvent.transform.height
  };
  if (transformingEvent.rightTransforming) {
    style.width =
      transformingEvent.mouseEvent.clientX - transformingEvent.transform.x;
  }
  const classes = useStyles(style);
  return <div className={classes.transformingContainer}>{children}</div>;
};

export default TransformingContainer;
