import { TrUtils } from "../../image/transformer/trutils";
describe("TrUtils Bottom Transform", () => {
  test("transform bottom should scale down", () => {
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
    const mouseEvent = { clientY: 300 };
    const containerRect = { top: 50 };
    TrUtils.transformBottom({ rect, containerRect, mouseEvent });
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.translateX).toBe(0);
    expect(rect.translateY).toBe(0);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(100);
    expect(rect.scaledWidth).toBe(100);
    expect(rect.scaledHeight).toBe(200);
  });

  test("transform bottom should not make height less than zero", () => {
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
    const containerRect = { top: 50 };
    TrUtils.transformBottom({ rect, containerRect, mouseEvent });
    expect(rect.x).toBe(50);
    expect(rect.y).toBe(50);
    expect(rect.translateX).toBe(0);
    expect(rect.translateY).toBe(0);
    expect(rect.width).toBe(100);
    expect(rect.height).toBe(100);
    expect(rect.scaledWidth).toBe(100);
    expect(rect.scaledHeight).toBe(0);
  });
});
