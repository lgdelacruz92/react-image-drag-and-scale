import React from "react";
import clsx from "clsx";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    topTransformer: {
      position: "absolute",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
  };
});

const TopTransformer = props => {
  const { className, data, transformer, updateTransformer } = props;
  const classes = useStyles();

  const startTranform = e => {
    transformer.topTransforming = true;
    updateTransformer(transformer);
    e.preventDefault();
    e.stopPropagation();
  };

  React.useEffect(() => {
    const onTopTransform = e => {
      if (transformer.topTransforming) {
        transformer.translateY = e.clientY - data.y;
        transformer.height = data.height - (e.clientY - data.y);
        updateTransformer(transformer);
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const endTopTransform = e => {
      transformer.topTransforming = false;
      updateTransformer(transformer);
    };
    document.addEventListener("mousemove", onTopTransform);
    document.addEventListener("mouseup", endTopTransform);
    return () => {
      document.removeEventListener("mousemove", onTopTransform);
      document.removeEventListener("mouseup", endTopTransform);
    };
  }, [transformer, updateTransformer, data]);
  return (
    <div
      onMouseDown={startTranform}
      className={clsx(className, classes.topTransformer)}
    />
  );
};

export default TopTransformer;
