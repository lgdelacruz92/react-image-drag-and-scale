const transformRight = ({ rect, mouseEvent }) => {
  rect.scaledWidth = mouseEvent.clientX - rect.translateX - rect.x;
  rect.scaledWidth = rect.scaledWidth < 0 ? 0 : rect.scaledWidth;
};

const transformTop = ({ rect, mouseEvent }) => {
  let scaledHeightCopy = rect.scaledHeight;
  rect.scaledHeight =
    rect.y + rect.translateY - mouseEvent.clientY + rect.scaledHeight;
  rect.scaledHeight = rect.scaledHeight < 0 ? 0 : rect.scaledHeight;
  rect.translateY = mouseEvent.clientY - rect.y;
  rect.translateY =
    rect.translateY > scaledHeightCopy ? scaledHeightCopy : rect.translateY;
};

const transformBottom = ({ rect, mouseEvent }) => {
  rect.scaledHeight = mouseEvent.clientY - (rect.y + rect.translateY);
  rect.scaledHeight = rect.scaledHeight < 0 ? 0 : rect.scaledHeight;
};

const transformTopRight = ({ rect, mouseEvent }) => {
  transformRight({ rect, mouseEvent });
  transformTop({ rect, mouseEvent });
};

export const TrUtils = {
  transformRight,
  transformTop,
  transformTopRight,
  transformBottom
};
