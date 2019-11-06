import React from "react";
import * as MaterialUI from "@material-ui/core";
import { TrUtils } from "./trutils";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    transformingContainer: {
      width: props => props.width,
      height: props => props.height,
      transform: props =>
        `translate(${props.translateX}px, ${props.translateY}px)`
    }
  };
});

const Container = props => {
  const { transformingEvent, children } = props;
  const style = {
    width: transformingEvent.transform.width,
    height: transformingEvent.transform.height,
    translateX: 0,
    translateY: 0
  };
  if (transformingEvent.rightTransforming) {
    style.width = TrUtils.rightTranformCalc({ state: transformingEvent });
  } else if (transformingEvent.topTransforming) {
    style.translateY = TrUtils.topTransformTranslateY({
      state: transformingEvent
    });
    style.height = TrUtils.topTransformHeight({ state: transformingEvent });
  }
  const classes = useStyles(style);
  return <div className={classes.transformingContainer}>{children}</div>;
};

export default Container;
