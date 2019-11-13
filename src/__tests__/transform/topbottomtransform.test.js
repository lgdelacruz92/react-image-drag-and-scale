import { TrUtils } from "../../image/transformer/TrUtils";

describe("Top and Bottom Combine Transform", () => {
  test("Test", () => {
    const rect = {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      translateX: 0,
      translateY: 0,
      scaledWidth: 100,
      scaledHeight: 100
    };
    let mouseEvent = { clientY: 20 };
    TrUtils.transformTop({ rect, mouseEvent });
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.translateX).toBe(0);
    expect(rect.translateY).toBe(-30);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(100);
    expect(rect.scaledWidth).toBe(100);
    expect(rect.scaledHeight).toBe(130);

    mouseEvent = { clientY: 160 };
    TrUtils.transformBottom({ rect, mouseEvent });
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.translateX).toBe(0);
    expect(rect.translateY).toBe(-30);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(100);
    expect(rect.scaledWidth).toBe(100);
    expect(rect.scaledHeight).toBe(140);

    mouseEvent = { clientY: 170 };
    TrUtils.transformBottom({ rect, mouseEvent });
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.translateX).toBe(0);
    expect(rect.translateY).toBe(-30);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(100);
    expect(rect.scaledWidth).toBe(100);
    expect(rect.scaledHeight).toBe(150);

    mouseEvent = { clientY: 10 };
    TrUtils.transformTop({ rect, mouseEvent });
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.translateX).toBe(0);
    expect(rect.translateY).toBe(-40);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(100);
    expect(rect.scaledWidth).toBe(100);
    expect(rect.scaledHeight).toBe(160);

    mouseEvent = { clientY: 160 };
    TrUtils.transformTop({ rect, mouseEvent });
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.translateX).toBe(0);
    expect(rect.translateY).toBe(110);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(100);
    expect(rect.scaledWidth).toBe(100);
    expect(rect.scaledHeight).toBe(10);
  });
});
