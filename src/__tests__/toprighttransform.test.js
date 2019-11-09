import { TrUtils } from "image/transformer/trutils";

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
    TrUtils.transformTopRight({ rect, mouseEvent });
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.translateX).toBe(0);
    expect(rect.translateY).toBe(-20);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(100);
    expect(rect.scaledWidth).toBe(150);
    expect(rect.scaledHeight).toBe(120);
  });

  test("Should not be less than zero", () => {
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
    let mouseEvent = { clientX: 20, clientY: 200 };
    TrUtils.transformTopRight({ rect, mouseEvent });
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.translateX).toBe(0);
    expect(rect.translateY).toBe(100);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(100);
    expect(rect.scaledWidth).toBe(0);
    expect(rect.scaledHeight).toBe(0);
  });
});
