import React from "react";
import ReactDOM from "react-dom";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    container: {
      position: "relative",
      border: "none",
      height: props => props.style.height,
      width: props => props.style.width,
      overflow: "hidden"
    },
    top: {
      position: "absolute",
      left: "50%",
      top: 0,
      width: "50px",
      height: "10px",
      background: "lightgrey",
      transform: "translate(-50%, -50%)",
      borderRadius: "3px",
      boxShadow: "0px 2px 2px black",
      "&:hover": {
        cursor: "ns-resize"
      }
    },
    topSelected: {
      background: "lightcoral"
    }
  };
});

const TransformingContent = props => {
  const startY = props.data.y;
  const startHeight = props.data.height;
  const [state, setState] = React.useState(props.data);
  React.useEffect(() => {
    const handleMove = e => {
      state.y = e.clientY;
      state.height = startHeight + startY - e.clientY;
      props.data.y = e.clientY;
      props.data.height = state.height;
      setState({ ...state });
    };

    document.addEventListener("mousemove", handleMove);
    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, [state, startHeight, startY, props.data]);
  return (
    <div
      style={{
        position: "relative",
        top: state.y,
        left: state.x,
        width: state.width,
        height: state.height,
        background: "blue"
      }}
    />
  );
};

const Transforming = props => {
  const div = document.createElement("div");
  div.setAttribute(
    "style",
    "position: absolute; top:0; left:0;background: red; width: 100%; height: 100%"
  );
  React.useEffect(() => {
    document.body.appendChild(div);
    return () => {
      props.update(props.data);
      if (div) {
        document.body.removeChild(div);
      }
    };
  });
  return ReactDOM.createPortal(<TransformingContent data={props.data} />, div);
};

const Transformer = props => {
  const { data, update, children } = props;
  const classes = useStyles({
    style: {
      width: data.width,
      height: data.height,
      y: 0
    }
  });
  const [transforming, setTransforming] = React.useState(false);

  const handleMouseDown = e => {
    setTransforming(true);
    e.preventDefault();
  };

  React.useEffect(() => {
    const handlemouseup = () => {
      setTransforming(false);
    };
    document.addEventListener("mouseup", handlemouseup);

    return () => {
      document.removeEventListener("mouseup", handlemouseup);
    };
  });

  return (
    <React.Fragment>
      {transforming ? (
        <Transforming data={data} update={update} />
      ) : (
        <React.Fragment>
          <div className={classes.container}>{children}</div>
          <div className={classes.top} onMouseDown={handleMouseDown} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Transformer;
