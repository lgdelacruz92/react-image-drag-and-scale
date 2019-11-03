import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    translator: {
      position: "absolute",
      top: prop => prop.y,
      left: prop => prop.x,
      fontSize: 0
    }
  };
});

const Translator = props => {
  const { data, children } = props;
  const classes = useStyles(data);
  return <div className={classes.translator}>{children}</div>;
};

export default Translator;
