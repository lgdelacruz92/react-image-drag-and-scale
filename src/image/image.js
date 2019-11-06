import React from "react";
import Transformer from "image/transformer/transformer";
import * as MaterialUI from "@material-ui/core";
import Translator from "image/translator/translator";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    container: {
      width: 0,
      height: 0
    },
    img: {
      display: "inline-block",
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  };
});

const Image = props => {
  const { data } = props;
  const [state, setState] = React.useState({ ...data, action: "" });
  const classes = useStyles();
  const updateData = newData => {
    setState({ ...newData });
  };

  return (
    <div className={classes.container}>
      <Translator data={state} updateData={updateData}>
        <Transformer data={state} updateData={updateData}>
          <img
            className={classes.img}
            onLoad={() => console.log("Image loading")}
            src={data.src}
            alt={data.alt}
          />
        </Transformer>
      </Translator>
    </div>
  );
};

export default Image;
