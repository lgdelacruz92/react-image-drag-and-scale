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
  const { className, data, transformer, updateTransformer } = props;

  const startTransforming = e => {
    transformer.rightTransforming = true;
    updateTransformer(transformer);
    e.preventDefault();
    e.stopPropagation();
  };

  React.useEffect(() => {
    const onRightTranform = e => {
      if (transformer.rightTransforming) {
        transformer.width = e.clientX - data.x;
        updateTransformer(transformer);
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const stopTransforming = e => {
      transformer.rightTransforming = false;
      updateTransformer(transformer);
    };

    document.addEventListener("mousemove", onRightTranform);
    document.addEventListener("mouseup", stopTransforming);
    return () => {
      document.removeEventListener("mousemove", onRightTranform);
      document.removeEventListener("mouseup", stopTransforming);
    };
  }, [data, transformer, updateTransformer]);

  const classes = useStyles();
  return (
    <div
      onMouseDown={startTransforming}
      className={clsx(className, classes.rightTransformer)}
    />
  );
};

export default RightTransformer;
