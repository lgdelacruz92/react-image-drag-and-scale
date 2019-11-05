import React from "react";
import clsx from "clsx";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    rightTransformer: {
      position: "absolute",
      left: "100%",
      top: "50%",
      transform: "translate(-50%, 0) rotate(90deg)",
      boxShadow: "0px 1px 2px black"
    }
  };
});

const RightTransformer = props => {
  const { className } = props;

  const classes = useStyles();
  return (
    <div {...props} className={clsx(className, classes.rightTransformer)} />
  );
};

export default RightTransformer;
