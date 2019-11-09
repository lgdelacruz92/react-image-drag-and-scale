const transformRight = ({ rect, mouseEvent }) => {
  rect.scaledWidth = mouseEvent.clientX - rect.translateX - rect.x;
  rect.scaledWidth = rect.scaledWidth < 0 ? 0 : rect.scaledWidth;
};
const transformTop = ({ rect, mouseEvent }) => {
  rect.translateY = mouseEvent.clientY - rect.y;
  rect.translateY =
    rect.translateY > rect.height ? rect.height : rect.translateY;
  rect.scaledHeight = rect.y - mouseEvent.clientY + rect.height;
  rect.scaledHeight = rect.scaledHeight < 0 ? 0 : rect.scaledHeight;
};

const transformTopRight = ({ rect, mouseEvent }) => {
  transformRight({ rect, mouseEvent });
  transformTop({ rect, mouseEvent });
};

export const TrUtils = {
  transformRight,
  transformTop,
  transformTopRight
};
