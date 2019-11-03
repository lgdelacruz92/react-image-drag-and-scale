import React from "react";
import * as MaterialUI from "@material-ui/core";
import TopTransformer from "./toptransformer";
import RightTransformer from "./righttransformer";

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
    transformer: {
      width: 50,
      height: 10,
      background: "lightgrey",
      boxShadow: "0px 1px 2px black",
      borderRadius: "3px"
    }
  };
});

const Transformer = props => {
  const { data, children } = props;

  const [state, setState] = React.useState({
    width: data.width,
    height: data.height,
    translateX: 0,
    translateY: 0
  });

  const classes = useStyles({
    width: state.width,
    height: state.height,
    translateX: state.translateX,
    translateY: state.translateY
  });

  const update = newState => {
    setState({ ...newState });
  };

  return (
    <div className={classes.basicContainer}>
      <TopTransformer
        data={data}
        transformer={state}
        updateTransformer={update}
        className={classes.transformer}
      />
      <RightTransformer
        data={data}
        transformer={state}
        updateTransformer={update}
        className={classes.transformer}
      />
      {children}
    </div>
  );
};

export default Transformer;
