import React from "react";
import * as MaterialUI from "@material-ui/core";
import TransformingContainer from "./transformingcontainer";
import RightTransformer from "./righttransformer";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    transformer: {
      fontSize: 0,
      display: "inline-block",
      width: props => props.width,
      height: props => props.height
    },
    transformerTrigger: {
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
  const classes = useStyles(data);

  const [state, setState] = React.useState({
    rightTransforming: false,
    mouseEvent: undefined,
    transform: data
  });

  React.useEffect(() => {
    const onMouseMove = e => {
      setState(s => ({ ...s, mouseEvent: e }));
    };

    const onMouseUp = e => {
      setState(s => {
        if (s.rightTransforming) {
          s.transform.width = e.clientX - s.transform.x;
        }
        return { ...s, rightTransforming: false };
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      // TODO update x and y and width and height of original data

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div className={classes.transformer}>
      <RightTransformer
        onMouseDown={() => setState({ ...state, rightTransforming: true })}
        className={classes.transformerTrigger}
      />
      <TransformingContainer transformingEvent={state}>
        {children}
      </TransformingContainer>
    </div>
  );
};

export default Transformer;
