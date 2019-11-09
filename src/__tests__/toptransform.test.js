import { TrUtils } from "image/transformer/TrUtils";

describe("TrUtils Top Transform Tests", () => {
  test("Top transform should scale up", () => {
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
    const mouseEvent = { clientY: 20 };
    TrUtils.transformTop({ rect, mouseEvent });
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.translateX).toBe(0);
    expect(rect.translateY).toBe(-30);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(100);
    expect(rect.scaledWidth).toBe(100);
    expect(rect.scaledHeight).toBe(130);
  });

  test("Top transform should scale down", () => {
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
    const mouseEvent = { clientY: 60 };
    TrUtils.transformTop({ rect, mouseEvent });
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.translateX).toBe(0);
    expect(rect.translateY).toBe(10);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(100);
    expect(rect.scaledWidth).toBe(100);
    expect(rect.scaledHeight).toBe(90);
  });

  test("Top transform should not lessen height less than zero", () => {
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
    const mouseEvent = { clientY: 160 };
    TrUtils.transformTop({ rect, mouseEvent });
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.translateX).toBe(0);
    expect(rect.translateY).toBe(100);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(100);
    expect(rect.scaledWidth).toBe(100);
    expect(rect.scaledHeight).toBe(0);
  });
});
