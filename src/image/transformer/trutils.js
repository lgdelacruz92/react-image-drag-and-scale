const rightTranformCalc = dependency => {
  const { state } = dependency;
  return state.mouseEvent.clientX - state.transform.x;
};

const rightTransform = dependency => {
  const { state } = dependency;
  state.transform.width = rightTranformCalc({ state });
  return { ...state, rightTransforming: false };
};

const topTransformTranslateY = dependency => {
  const { state } = dependency;
  if (state.mouseEvent.clientY < state.transform.y + state.transform.height) {
    return state.mouseEvent.clientY - state.transform.y;
  } else {
    return state.transform.height;
  }
};

const topTransformHeight = dependency => {
  const { state } = dependency;
  return (
    state.transform.height + (state.transform.y - state.mouseEvent.clientY)
  );
};

export const TrUtils = {
  rightTransform,
  rightTranformCalc,
  topTransformTranslateY,
  topTransformHeight
};
