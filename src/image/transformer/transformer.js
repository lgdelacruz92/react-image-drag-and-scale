import React from "react";
import { useStyles } from "./styles";
import { createControl, useControls } from "./trdivprops";

const Transformer = props => {
  const { children, data, hidden } = props;
  data.data.hidden = hidden;
  const classes = useStyles(data.data);
  const [controls] = useControls({ classes });
  return (
    <div className={classes.container}>
      {controls.map((control, i) =>
        createControl({
          key: i,
          id: control.id,
          className: `${control.className} ${data.imageId}`,
          hidden: hidden
        })
      )}
      {children}
    </div>
  );
};

export default Transformer;
