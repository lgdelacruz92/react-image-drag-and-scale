import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    transformer: {
      fontSize: 0,
      display: "inline-block",
      width: props => props.width,
      height: props => props.height
    },
    transformer2: {
      fontSize: 0,
      display: "inline-block",
      width: props => props.width + 50,
      height: props => props.height + 50
    }
  };
});

const Transformer = props => {
  const { data, children, updateData } = props;
  const classes = useStyles({
    width: data.width,
    height: data.height
  });

  const initiateTransform = e => {
    data.action = "initiate-transform";
    updateData(data);
  };

  const stopTransform = e => {
    data.action = "";
    updateData(data);
  };

  if (data.action !== "initiate-transform") {
    return (
      <div onClick={initiateTransform} className={classes.transformer}>
        {children}
      </div>
    );
  } else {
    return (
      <div onClick={stopTransform} className={classes.transformer2}>
        {children}
      </div>
    );
  }
};

export default Transformer;
