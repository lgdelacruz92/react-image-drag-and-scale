import { TrUtils } from "../../image/transformer/trutils";

describe("TrUtils Top Right Transform", () => {
  test("Should scale top right", () => {
    const rect = {
      x: 50,
      y: 50,
      translateX: 0,
      translateY: 0,
      width: 100,
      height: 100,
      scaledWidth: 100,
      scaledHeight: 100
    };
    let mouseEvent = { clientX: 200, clientY: 30 };
    const containerRect = { top: 50, left: 50 };
    TrUtils.transformTopRight({ rect, containerRect, mouseEvent });
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.translateX).toBe(0);
    expect(rect.translateY).toBe(-70);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(100);
    expect(rect.scaledWidth).toBe(100);
    expect(rect.scaledHeight).toBe(170);
  });
});
