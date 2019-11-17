import babel from "rollup-plugin-babel";

export default [
  {
    input: "src/image/index.js",
    output: {
      name: "react-image-drag-and-scale",
      file: "dist/index.js",
      format: "es"
    },
    external: ["react"],
    plugins: [
      babel({
        exclude: "node_modules/.**"
      })
    ]
  }
];
