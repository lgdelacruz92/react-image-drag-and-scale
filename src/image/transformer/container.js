import React from "react";
import { useStyles } from "./styles";
import { createControl, useControls } from "./trdivprops";

const Container = props => {
  const { children, transformer, setTransformer } = props;
  const classes = useStyles(transformer);
  const [controls] = useControls({ setTransformer, transformer, classes });
  return (
    <div className={classes.container}>
      {controls.map((control, i) =>
        createControl({
          key: i,
          onMouseDown: control.onMouseDown,
          className: control.className
        })
      )}
      {children}
    </div>
  );
};

export default Container;
