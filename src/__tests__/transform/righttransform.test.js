import { TrUtils } from "../../image/transformer/trutils";

describe("TrUtils Right Transform Test", () => {
  test("transform right should scale to the right", () => {
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

    for (let i = 200; i > 0; i--) {
      const mouseEvent = { clientX: i };
      TrUtils.transformRight({ rect, mouseEvent });
      expect(rect.translateX).toBe(0);
      expect(rect.translateY).toBe(0);
      if (i >= 50) {
        expect(rect.scaledWidth).toBe(i - 50);
      } else {
        expect(rect.scaledWidth).toBe(0);
      }
      expect(rect.scaledHeight).toBe(100);
    }
  });
});
