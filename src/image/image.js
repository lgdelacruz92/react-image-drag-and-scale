import React from "react";
import Transformer from "./transformer/transformer";
import { handleTransform } from "./transformer/eventhandler";
import * as MaterialUI from "@material-ui/core";
import Translator from "./translator/translator";
import { handleTranslate } from "./translator/eventhandler";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    img: {
      display: "inline-block",
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  };
});

const Image = React.forwardRef((props, ref) => {
  const {
    data,
    containerRef,
    onUpdate,
    selected,
    onStartUpdate,
    onEndUpdate,
    onContextMenu
  } = props;
  const [state, setState] = React.useState({
    data: data,
    status: null,
    imageId: data.id,
    targetType: null,
    targetId: null
  });
  const classes = useStyles();
  React.useEffect(() => {
    const containerRect = containerRef.current.getBoundingClientRect();

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
      if (e.target.classList.contains(state.imageId) && e.which === 1) {
        onStartUpdate(e);
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
      if (state.status === "mouse-down") {
        setState(s => {
          // get type of action
          if (s.targetType === "transformer") {
            const newEvent = {
              clientX: e.clientX - containerRect.left,
              clientY: e.clientY - containerRect.top
            };
            handleTransform(newEvent, s);
            return { ...s };
          } else if (s.targetType === "translator") {
            handleTranslate(e, s);
            return { ...s };
          }
          return { ...s };
        });
      }

      e.preventDefault();
    };

    const onMouseUp = e => {
      if (state.status === "mouse-down") {
        onEndUpdate(e);
        setState(s => ({
          ...s,
          status: "mouse-up",
          targetType: null,
          targetId: null
        }));
      }

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
  }, [
    data,
    state.imageId,
    state.status,
    containerRef,
    onStartUpdate,
    onEndUpdate
  ]);

  React.useEffect(() => {
    if (ref) {
      ref.current = state;
      if (onUpdate) {
        onUpdate();
      }
    }
  }, [state, onUpdate, ref]);

  return (
    <Translator data={state} onContextMenu={onContextMenu}>
      <Transformer data={state} hidden={selected}>
        <img
          className={classes.img}
          src={state.data.src}
          alt={state.data.alt}
        />
      </Transformer>
    </Translator>
  );
});

export default Image;
