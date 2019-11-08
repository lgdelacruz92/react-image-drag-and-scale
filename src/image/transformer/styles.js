import * as MaterialUI from "@material-ui/core";
import { TrUtils } from "./trutils";

export const useStyles = MaterialUI.makeStyles(theme => {
  return {
    transformer: {
      fontSize: 0,
      display: "inline-block",
      width: "auto",
      height: "auto",
      background: "rgba(255, 0, 0, 0.3)"
    },
    transformerTrigger: {
      width: 50,
      height: 10,
      background: "lightgrey",
      boxShadow: "0px 1px 2px black",
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
    }
  };
});
