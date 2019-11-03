import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    basicContainer: {
      fontSize: 0,
      display: "inline-block",
      width: props => props.width,
      height: props => props.height,
      transform: props =>
        `translate(${props.translateX}px, ${props.translateY}px)`,
      position: "relative"
    },
    transformerBtnTop: {
      width: 50,
      height: 10,
      background: "lightgrey",
      boxShadow: "0px 1px 2px black",
      borderRadius: "3px",
      position: "absolute",
      transform: "translate(-50%, -50%)",
      left: "50%"
    }
  };
});

const Transformer = props => {
  const { data, children } = props;

  const [state, setState] = React.useState({
    width: data.width,
    height: data.height,
    translateX: 0,
    translateY: 0,
    transforming: false
  });

  const classes = useStyles({
    width: state.width,
    height: state.height,
    translateX: state.translateX,
    translateY: state.translateY
  });

  const onMouseDown = e => {
    state.transforming = true;
    e.preventDefault();
    setState({ ...state });
  };

  React.useEffect(() => {
    const handleMouseMove = e => {
      if (state.transforming) {
        state.translateX = 0;
        state.translateY = e.clientY - data.y;
        state.height = data.height - (e.clientY - data.y);
        setState({ ...state });
        e.preventDefault();
      }
    };

    const handleMouseUp = e => {
      state.transforming = false;
      e.preventDefault();
      setState({ ...state });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [state, data]);

  return (
    <div className={classes.basicContainer}>
      <div onMouseDown={onMouseDown} className={classes.transformerBtnTop} />
      {children}
    </div>
  );
};

export default Transformer;
