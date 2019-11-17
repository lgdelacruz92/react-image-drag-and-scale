# React Image Drag and Scale

> This is an upgrade from image-drag-and-scale

[![NPM](https://img.shields.io/npm/v/image-drag-and-scale.svg)](https://www.npmjs.com/package/image-drag-and-scale) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![](https://media.giphy.com/media/YmiC7E6aX3xZu5pIZN/giphy.gif)](https://media.giphy.com/media/YmiC7E6aX3xZu5pIZN/giphy.gif)

## Install

```bash
npm install --save react-image-drag-and-scale

# or
yarn add react-image-drag-and-scale
```

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import * as MaterialUI from "@material-ui/core";
import Image from "image/image";
import "./styles.css";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    app: {
      position: "relative",
      width: "100%",
      height: "100%"
    },
    container: {
      width: 500,
      height: 500,
      border: "1px solid red",
      position: "relative",
      overflow: "hidden",
      top: 50,
      left: 50
    }
  };
});

function App() {
  const classes = useStyles();
  const imageData = {
    x: 50,
    y: 200,
    translateX: 0,
    translateY: 0,
    scaledWidth: 100,
    scaledHeight: 100,
    width: 100,
    height: 100,
    src: "https://source.unsplash.com/random/1000x1000",
    alt: "random",
    id: "123",
    index: 1
  };

  const containerRef = React.useRef();
  const [transform, setTransform] = React.useState(false);

  return (
    <div className={classes.app}>
      <div ref={containerRef} className={classes.container}>
        <Image
          data={imageData}
          onStartUpdate={() => {
            console.log("Update starting");
          }}
          containerRef={containerRef}
          selected={transform}
          onEndUpdate={() => {
            console.log("End update");
          }}
        />
      </div>
      <button onClick={() => setTransform(!transform)}>Deselect</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

# Version Update

## v1.0.0

> First release. If you find issues, please post an issue on the github

## License

MIT © [lgdelacruz92](https://github.com/lgdelacruz92)
