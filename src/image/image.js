import React from "react";
import Transformer, { handleTransform } from "./transformer";
import * as MaterialUI from "@material-ui/core";
import Translator, { handleTranslate } from "./translator";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    container: {
      width: 0,
      height: 0,
      pointerEvents: "none"
    },
    img: {
      display: "inline-block",
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  };
});

const Image = props => {
  const { data } = props;
  const [state, setState] = React.useState({
    data: data,
    status: null,
    imageId: `unique-id${data.id}`,
    targetType: null,
    targetId: null
  });
  const classes = useStyles();

  React.useEffect(() => {
    const onMouseDown = e => {
      let theTargetType = null;
      let theTargetId = null;
      if (e.target.classList.contains("transformer")) {
        theTargetType = "transformer";
        theTargetId = e.target.id;
      } else if (e.target.classList.contains("translator")) {
        theTargetType = "translator";
        theTargetId = e.target.id;
      }
      if (e.target.classList.contains(state.imageId)) {
        setState(s => ({
          ...s,
          status: "mouse-down",
          targetType: theTargetType,
          targetId: theTargetId,
          startPoint: {
            x: e.clientX,
            y: e.clientY,
            dataX: s.data.x,
            dataY: s.data.y
          }
        }));
      }

      e.preventDefault();
    };

    const onMouseMove = e => {
      setState(s => {
        if (s.status === "mouse-down") {
          // get type of action

          if (s.targetType === "transformer") {
            const transformedData = handleTransform(e, s);
            return { ...s, data: transformedData };
          } else if (s.targetType === "translator") {
            const translatedData = handleTranslate(e, s);
            return { ...translatedData };
          }
        }
        return { ...s };
      });

      e.preventDefault();
    };

    const onMouseUp = e => {
      setState(s => ({
        ...s,
        status: "mouse-up",
        targetType: null,
        targetId: null
      }));
      e.preventDefault();
    };
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [data, state.imageId]);

  return (
    <div className={classes.container}>
      <Translator data={state}>
        <Transformer data={state}>
          <img
            className={classes.img}
            src={state.data.src}
            alt={state.data.alt}
          />
        </Transformer>
      </Translator>
    </div>
  );
};

export default Image;
