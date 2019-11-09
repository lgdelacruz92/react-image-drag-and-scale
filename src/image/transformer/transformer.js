import React from "react";
import Container from "./container";
import * as TrDivs from "./trdivs";
import clsx from "clsx";
import { useStyles } from "./styles";
import { useEventHandlers } from "./eventhandler";

const Transformer = props => {
  const { data, children } = props;

  const [state, setState] = React.useState({
    rightTransforming: false,
    topTransforming: false,
    topRightTransforming: false,
    rect: data
  });
  const classes = useStyles(state);
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
    <Container rect={state.rect}>
      <TrDivs.TopRightTrDiv
        onMouseDown={() => setState({ ...state, topRightTransforming: true })}
        className={clsx(
          classes.neswTransformerControl,
          classes.transformerControl,
          classes.cornerTransformer,
          classes.topRightTr
        )}
      />
      <TrDivs.RightTrDiv
        onMouseDown={() => setState({ ...state, rightTransforming: true })}
        className={clsx(
          classes.horizontalTransformerControl,
          classes.transformerControl,
          classes.edgeTransformer,
          classes.rightTr
        )}
      />
      <TrDivs.TopTrDiv
        onMouseDown={() => setState({ ...state, topTransforming: true })}
        className={clsx(
          classes.verticalTransformerControl,
          classes.transformerControl,
          classes.edgeTransformer,
          classes.topTr
        )}
      />
      {children}
    </Container>
  );
};

export default Transformer;
