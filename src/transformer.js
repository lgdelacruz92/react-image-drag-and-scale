import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    transformer: {
      fontSize: 0,
      display: "inline-block",
      width: props => props.width,
      height: props => props.height
    }
  };
});

const Transformer = props => {
  const { data, updateData, children } = props;
  const classes = useStyles({
    width: data.width,
    height: data.height
  });

  const onClick = e => {
    console.log("transformer clicked");
    data.width += 5;
    data.height += 5;
    updateData(data);
  };

  return (
    <div className={classes.transformer} onClick={onClick}>
      {children}
    </div>
  );
};

export default Transformer;
