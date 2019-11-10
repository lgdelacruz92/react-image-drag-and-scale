import React from "react";
import Container from "./container";
import { useEventHandlers } from "./eventhandler";

const Transformer = props => {
  const { data, children } = props;
  const [state, setState] = React.useState({
    rightTransforming: false,
    topTransforming: false,
    topRightTransforming: false,
    bottomTransforming: false,
    bottomRightTransforming: false,
    leftTransforming: false,
    bottomLeftTransforming: false,
    topLeftTransforming: false,
    rect: data
  });
  const [onMouseMove, onMouseUp] = useEventHandlers({ setState });

  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      // TODO update x and y and width and height of original data
      // in database
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return (
    <Container transformer={state} setTransformer={setState}>
      {children}
    </Container>
  );
};

export default Transformer;
