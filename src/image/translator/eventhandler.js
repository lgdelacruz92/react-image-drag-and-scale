export const handleTranslate = (e, s) => {
  s.data.x = e.clientX - s.startPoint.x + s.startPoint.dataX;
  s.data.y = e.clientY - s.startPoint.y + s.startPoint.dataY;
  return { ...s, data: { ...s.data } };
};
