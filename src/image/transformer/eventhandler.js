import { TrUtils } from "./trutils";

export const handleMouseMove = (e, data, id) => {
  if (id === "top-right-tr") {
    TrUtils.transformTopRight({ rect: data, mouseEvent: e });
    return { ...data };
  } else if (id === "right-tr") {
    TrUtils.transformRight({ rect: data, mouseEvent: e });
    return { ...data };
  } else if (id === "top-tr") {
    TrUtils.transformTop({ rect: data, mouseEvent: e });
    return { ...data };
  } else if (id === "bottom-tr") {
    TrUtils.transformBottom({ rect: data, mouseEvent: e });
    return { ...data };
  } else if (id === "bottom-right-tr") {
    TrUtils.transformBottomRight({ rect: data, mouseEvent: e });
    return { ...data };
  } else if (id === "left-tr") {
    TrUtils.transformLeft({ rect: data, mouseEvent: e });
    return { ...data };
  } else if (id === "bottom-left-tr") {
    TrUtils.transformBottomLeft({ rect: data, mouseEvent: e });
    return { ...data };
  } else if (id === "top-left-tr") {
    TrUtils.transformTopLeft({ rect: data, mouseEvent: e });
    return { ...data };
  } else {
    return { ...data };
  }
};
