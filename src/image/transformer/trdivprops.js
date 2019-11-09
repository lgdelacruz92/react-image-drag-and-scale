import React from "react";
import * as TrDivs from "./trdivs";
import clsx from "clsx";

export const createControl = ({ key, Component, onMouseDown, className }) => {
  return (
    <Component key={key} onMouseDown={onMouseDown} className={className} />
  );
};

export const useControls = ({ setTransformer, transformer, classes }) => {
  let controls = [
    {
      component: TrDivs.TopRightTrDiv,
      onMouseDown: () =>
        setTransformer({ ...transformer, topRightTransforming: true }),
      className: clsx(
        classes.neswTransformerControl,
        classes.transformerControl,
        classes.cornerTransformer,
        classes.topRightTr
      )
    },
    {
      component: TrDivs.TopTrDiv,
      onMouseDown: () =>
        setTransformer({ ...transformer, topTransforming: true }),
      className: clsx(
        classes.verticalTransformerControl,
        classes.transformerControl,
        classes.edgeTransformer,
        classes.topTr
      )
    },
    {
      component: TrDivs.RightTrDiv,
      onMouseDown: () =>
        setTransformer({ ...transformer, rightTransforming: true }),
      className: clsx(
        classes.horizontalTransformerControl,
        classes.transformerControl,
        classes.edgeTransformer,
        classes.rightTr
      )
    }
  ];
  return [controls];
};
