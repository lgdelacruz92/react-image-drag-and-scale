import * as MaterialUI from "@material-ui/core";

export const useStyles = MaterialUI.makeStyles(theme => {
  return {
    verticalTransformerControl: {
      "&:hover": {
        cursor: "ns-resize"
      }
    },
    horizontalTransformerControl: {
      "&:hover": {
        cursor: "ew-resize"
      }
    },
    neswTransformerControl: {
      "&:hover": {
        cursor: "nesw-resize"
      }
    },
    nwseTransformerControl: {
      "&:hover": {
        cursor: "nwse-resize"
      }
    },
    transformerControl: {
      position: "absolute",
      zIndex: props => props.index,
      background: "lightgrey",
      boxShadow: "0px 1px 2px black",
      pointerEvents: "auto"
    },
    cornerTransformer: {
      width: 10,
      height: 10,
      borderRadius: "50%"
    },
    edgeTransformer: {
      width: 50,
      height: 10,
      borderRadius: "3px"
    },
    rightTr: {
      top: "50%",
      left: "100%",
      transform: "translate(-50%, -50%) rotate(90deg)"
    },
    topTr: {
      top: 0,
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    topRightTr: {
      right: 0,
      transform: "translate(50%, -50%)"
    },
    bottomTr: {
      left: "50%",
      bottom: 0,
      transform: "translate(-50%, 50%)"
    },
    bottomRightTr: {
      right: 0,
      bottom: 0,
      transform: "translate(50%, 50%)"
    },
    leftTr: {
      top: "50%",
      transform: "translate(-50%, -50%) rotate(90deg)"
    },
    bottomLeftTr: {
      bottom: 0,
      transform: "translate(-50%, 50%)"
    },
    topLeftTr: {
      transform: "translate(-50%, -50%)"
    },
    container: {
      position: "absolute",
      width: props => props.scaledWidth,
      height: props => props.scaledHeight,
      transform: props =>
        `translate(${props.translateX}px, ${props.translateY}px)`
    }
  };
});
