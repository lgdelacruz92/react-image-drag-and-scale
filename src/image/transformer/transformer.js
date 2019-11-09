import React from "react";
import Container from "./container";
import * as TrDivs from "./trdivs";
import clsx from "clsx";
import { TrUtils } from "./trutils";
import { useStyles } from "./styles";

const Transformer = props => {
  const { data, children } = props;

  const [state, setState] = React.useState({
    rightTransforming: false,
    topTransforming: false,
    mouseEvent: undefined,
    transform: data
  });
  const classes = useStyles(state);

  React.useEffect(() => {
    const onMouseMove = e => {
      setState(s => ({ ...s, mouseEvent: e }));
      e.preventDefault();
    };

    const onMouseUp = e => {
      setState(s => {
        if (s.rightTransforming) {
          return TrUtils.rightTransform({ state: s });
        } else if (s.topTransforming) {
          console.log("Top transform", TrUtils.topTransform({ state: s }));
          return TrUtils.topTransform({ state: s });
        } else {
          return { ...s };
        }
      });
      e.preventDefault();
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      // TODO update x and y and width and height of original data
      // in database
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div className={classes.transformer}>
      <Container transformingEvent={state}>
        <TrDivs.RightTrDiv
          onMouseDown={() => setState({ ...state, rightTransforming: true })}
          className={clsx(classes.transformerTrigger, classes.rightTr)}
        />
        <TrDivs.TopTrDiv
          onMouseDown={() => setState({ ...state, topTransforming: true })}
          className={clsx(classes.transformerTrigger, classes.topTr)}
        />
        {children}
      </Container>
    </div>
  );
};

export default Transformer;
