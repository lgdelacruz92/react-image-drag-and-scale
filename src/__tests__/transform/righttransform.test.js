import { TrUtils } from "../../image/transformer/trutils";

describe("TrUtils Right Transform Test", () => {
  test("transform right should scale to the right", () => {
    const rect = {
      x: 0,
      y: 0,
      translateX: 50,
      translateY: 50,
      width: 100,
      height: 100,
      scaledWidth: 100,
      scaledHeight: 100
    };
    const mouseEvent = { clientX: 200 };
    TrUtils.transformRight({ rect, mouseEvent });
    expect(rect.translateX).toBe(50);
    expect(rect.translateY).toBe(50);
    expect(rect.scaledWidth).toBe(150);
    expect(rect.scaledHeight).toBe(100);
  });

  test("transform right should scale to the right (non origin)", () => {
    const rect = {
      x: 50,
      y: 50,
      translateX: 50,
      translateY: 50,
      width: 100,
      height: 100,
      scaledWidth: 100,
      scaledHeight: 100
    };
    const mouseEvent = { clientX: 200 };
    TrUtils.transformRight({ rect, mouseEvent });
    expect(rect.translateX).toBe(50);
    expect(rect.translateY).toBe(50);
    expect(rect.scaledWidth).toBe(100);
    expect(rect.scaledHeight).toBe(100);
  });

  test("transform right should decrease to the left", () => {
    const rect = {
      x: 0,
      y: 0,
      translateX: 50,
      translateY: 50,
      width: 100,
      height: 100,
      scaledWidth: 100,
      scaledHeight: 100
    };
    const mouseEvent = { clientX: 100 };
    TrUtils.transformRight({ rect, mouseEvent });
    expect(rect.translateX).toBe(50);
    expect(rect.translateY).toBe(50);
    expect(rect.scaledWidth).toBe(50);
    expect(rect.scaledHeight).toBe(100);
  });

  test("transform right should not be less than zero", () => {
    const rect = {
      x: 0,
      y: 0,
      translateX: 50,
      translateY: 50,
      width: 100,
      height: 100,
      scaledWidth: 100,
      scaledHeight: 100
    };
    const mouseEvent = { clientX: 30 };
    TrUtils.transformRight({ rect, mouseEvent });
    expect(rect.translateX).toBe(50);
    expect(rect.translateY).toBe(50);
    expect(rect.scaledWidth).toBe(0);
    expect(rect.scaledHeight).toBe(100);
  });
});
