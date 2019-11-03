import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    translator: {
      fontSize: 0,
      display: "inline-block",
      transform: props => `translate(${props.x}px, ${props.y}px)`
    }
  };
});

const Translator = props => {
  const { children, data } = props;
  const classes = useStyles({
    x: data.x,
    y: data.y
  });

  return <div className={classes.translator}>{children}</div>;
};

export default Translator;
