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
      zIndex: 2,
      background: "lightgrey",
      boxShadow: "0px 1px 2px black"
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
    container: {
      width: props => props.rect.scaledWidth,
      height: props => props.rect.scaledHeight,
      transform: props =>
        `translate(${props.rect.translateX}px, ${props.rect.translateY}px)`
    }
  };
});
