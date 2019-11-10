import React from "react";
import TrDiv from "./trdiv";
import clsx from "clsx";

export const createControl = ({ key, onMouseDown, className }) => {
  return <TrDiv key={key} onMouseDown={onMouseDown} className={className} />;
};

export const useControls = ({ setTransformer, transformer, classes }) => {
  let controls = [
    {
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
      onMouseDown: () =>
        setTransformer({ ...transformer, rightTransforming: true }),
      className: clsx(
        classes.horizontalTransformerControl,
        classes.transformerControl,
        classes.edgeTransformer,
        classes.rightTr
      )
    },
    {
      onMouseDown: () =>
        setTransformer({ ...transformer, bottomTransforming: true }),
      className: clsx(
        classes.verticalTransformerControl,
        classes.transformerControl,
        classes.edgeTransformer,
        classes.bottomTr
      )
    },
    {
      onMouseDown: () =>
        setTransformer({ ...transformer, bottomRightTransforming: true }),
      className: clsx(
        classes.nwseTransformerControl,
        classes.transformerControl,
        classes.cornerTransformer,
        classes.bottomRightTr
      )
    },
    {
      onMouseDown: () =>
        setTransformer({ ...transformer, leftTransforming: true }),
      className: clsx(
        classes.horizontalTransformerControl,
        classes.transformerControl,
        classes.edgeTransformer,
        classes.leftTr
      )
    }
  ];
  return [controls];
};
