import React from "react";
import { useStyles } from "./styles";
import { createControl, useControls } from "./trdivprops";

const Container = props => {
  const { children, transformer } = props;
  const classes = useStyles(transformer.data);
  const [controls] = useControls({ classes });
  return (
    <div className={classes.container}>
      {controls.map((control, i) =>
        createControl({
          key: i,
          id: control.id,
          className: `${control.className} ${transformer.id}`
        })
      )}
      {children}
    </div>
  );
};

export default Container;
