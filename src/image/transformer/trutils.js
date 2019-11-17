const transformRight = ({ rect, mouseEvent }) => {
  rect.scaledWidth = mouseEvent.clientX - rect.translateX - rect.x;
  rect.scaledWidth = rect.scaledWidth < 0 ? 0 : rect.scaledWidth;
};

const transformLeft = ({ rect, mouseEvent }) => {
  let virtualX = rect.x + rect.translateX;
  if (mouseEvent.clientX <= virtualX + rect.scaledWidth) {
    rect.scaledWidth = virtualX + rect.scaledWidth - mouseEvent.clientX;
    virtualX = mouseEvent.clientX;
    rect.translateX = virtualX - rect.x;
  } else {
    rect.scaledWidth = 0;
  }
};

const transformTop = ({ rect, mouseEvent }) => {
  let virtualY = rect.translateY + rect.y;
  if (mouseEvent.clientY <= virtualY + rect.scaledHeight) {
    rect.scaledHeight = virtualY + rect.scaledHeight - mouseEvent.clientY;
    virtualY = mouseEvent.clientY;
    rect.translateY = virtualY - rect.y;
  } else {
    rect.scaledHeight = 0;
  }
};

const transformBottom = ({ rect, mouseEvent }) => {
  rect.scaledHeight = mouseEvent.clientY - (rect.y + rect.translateY);
  rect.scaledHeight = rect.scaledHeight < 0 ? 0 : rect.scaledHeight;
};

const transformTopRight = ({ rect, mouseEvent }) => {
  transformRight({ rect, mouseEvent });
  transformTop({ rect, mouseEvent });
};

const transformBottomRight = ({ rect, mouseEvent }) => {
  transformRight({ rect, mouseEvent });
  transformBottom({ rect, mouseEvent });
};

const transformBottomLeft = ({ rect, mouseEvent }) => {
  transformLeft({ rect, mouseEvent });
  transformBottom({ rect, mouseEvent });
};

const transformTopLeft = ({ rect, mouseEvent }) => {
  transformLeft({ rect, mouseEvent });
  transformTop({ rect, mouseEvent });
};

export const TrUtils = {
  transformRight,
  transformTop,
  transformTopRight,
  transformBottom,
  transformBottomRight,
  transformLeft,
  transformBottomLeft,
  transformTopLeft
};
