import React from "react";
import Container from "./container";

const Transformer = props => {
  const { data, children } = props;

  return <Container transformer={data}>{children}</Container>;
};

export default Transformer;
