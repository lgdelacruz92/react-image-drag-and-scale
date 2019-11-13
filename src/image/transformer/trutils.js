const transformRight = ({ rect, containerRect, mouseEvent }) => {
  rect.scaledWidth =
    mouseEvent.clientX - containerRect.left - rect.translateX - rect.x;
  rect.scaledWidth = rect.scaledWidth < 0 ? 0 : rect.scaledWidth;
};

const transformLeft = ({ rect, containerRect, mouseEvent }) => {
  let virtualX = rect.x + rect.translateX + containerRect.left;
  if (mouseEvent.clientX <= virtualX + rect.scaledWidth) {
    rect.scaledWidth = virtualX + rect.scaledWidth - mouseEvent.clientX;
    virtualX = mouseEvent.clientX;
    rect.translateX = virtualX - rect.x - containerRect.left;
  } else {
    rect.scaledWidth = 0;
  }
};

const transformTop = ({ rect, containerRect, mouseEvent }) => {
  let virtualY = rect.translateY + rect.y + containerRect.top;
  if (mouseEvent.clientY <= virtualY + rect.scaledHeight) {
    rect.scaledHeight = virtualY + rect.scaledHeight - mouseEvent.clientY;
    virtualY = mouseEvent.clientY;
    rect.translateY = virtualY - rect.y - containerRect.top;
  } else {
    rect.scaledHeight = 0;
  }
};

const transformBottom = ({ rect, containerRect, mouseEvent }) => {
  rect.scaledHeight =
    mouseEvent.clientY - containerRect.top - (rect.y + rect.translateY);
  rect.scaledHeight = rect.scaledHeight < 0 ? 0 : rect.scaledHeight;
};

const transformTopRight = ({ rect, containerRect, mouseEvent }) => {
  transformRight({ rect, containerRect, mouseEvent });
  transformTop({ rect, containerRect, mouseEvent });
};

const transformBottomRight = ({ rect, containerRect, mouseEvent }) => {
  transformRight({ rect, containerRect, mouseEvent });
  transformBottom({ rect, containerRect, mouseEvent });
};

const transformBottomLeft = ({ rect, containerRect, mouseEvent }) => {
  transformLeft({ rect, containerRect, mouseEvent });
  transformBottom({ rect, containerRect, mouseEvent });
};

const transformTopLeft = ({ rect, containerRect, mouseEvent }) => {
  transformLeft({ rect, containerRect, mouseEvent });
  transformTop({ rect, containerRect, mouseEvent });
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
