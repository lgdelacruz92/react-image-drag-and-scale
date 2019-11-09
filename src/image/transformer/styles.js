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
    transformerControl: {
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
      position: "absolute",
      top: "50%",
      left: "100%",
      zIndex: 2,
      transform: "translate(-50%, -50%) rotate(90deg)"
    },
    topTr: {
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2
    },
    topRightTr: {
      position: "absolute",
      zIndex: 2,
      right: 0,
      transform: "translate(50%, -50%)"
    }
  };
});
