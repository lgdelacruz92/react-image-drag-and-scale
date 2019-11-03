import React from "react";
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    img: {
      padding: 0,
      margin: 0,
      objectFit: "cover"
    }
  };
});

const Image = props => {
  const { imageData } = props;
  const classes = useStyles(imageData);
  const [state, setState] = React.useState(0);
  const onClick = e => {
    console.log("Clicked");
    setState(state + 1);
  };

  return (
    <img
      onClick={onClick}
      onLoad={() => console.log("image loading")}
      className={classes.img}
      width={imageData.width}
      height={imageData.height}
      src={imageData.src}
      alt={imageData.alt}
    />
  );
};

export default Image;
