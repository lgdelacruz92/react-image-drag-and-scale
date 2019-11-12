import React from "react";
import clsx from "clsx";

export const createControl = ({ key, id, className }) => {
  return <div key={key} id={id} className={`${className} transformer`} />;
};

export const useControls = ({ classes }) => {
  let controls = [
    {
      id: "top-right-tr",
      className: clsx(
        classes.neswTransformerControl,
        classes.transformerControl,
        classes.cornerTransformer,
        classes.topRightTr
      )
    },
    {
      id: "top-tr",
      className: clsx(
        classes.verticalTransformerControl,
        classes.transformerControl,
        classes.edgeTransformer,
        classes.topTr
      )
    },
    {
      id: "right-tr",
      className: clsx(
        classes.horizontalTransformerControl,
        classes.transformerControl,
        classes.edgeTransformer,
        classes.rightTr
      )
    },
    {
      id: "bottom-tr",
      className: clsx(
        classes.verticalTransformerControl,
        classes.transformerControl,
        classes.edgeTransformer,
        classes.bottomTr
      )
    },
    {
      id: "bottom-right-tr",
      className: clsx(
        classes.nwseTransformerControl,
        classes.transformerControl,
        classes.cornerTransformer,
        classes.bottomRightTr
      )
    },
    {
      id: "left-tr",
      className: clsx(
        classes.horizontalTransformerControl,
        classes.transformerControl,
        classes.edgeTransformer,
        classes.leftTr
      )
    },
    {
      id: "bottom-left-tr",
      className: clsx(
        classes.neswTransformerControl,
        classes.transformerControl,
        classes.cornerTransformer,
        classes.bottomLeftTr
      )
    },
    {
      id: "top-left-tr",
      className: clsx(
        classes.nwseTransformerControl,
        classes.transformerControl,
        classes.cornerTransformer,
        classes.topLeftTr
      )
    }
  ];
  return [controls];
};
