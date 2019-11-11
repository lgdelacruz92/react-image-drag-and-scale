import React from "react";
import Container from "./container";
import { handleMouseMove } from "./eventhandler";

const Transformer = props => {
  const { data, setData, children, imageState } = props;

  React.useEffect(() => {
    const onMouseMove = e => {
      if (imageState.type === "transformer") {
        setData(handleMouseMove(e, data, imageState.id));
      }
      e.preventDefault();
    };
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [imageState, data, setData]);

  return <Container transformer={data}>{children}</Container>;
};

export default Transformer;
