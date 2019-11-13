import { TrUtils } from "../../image/transformer/trutils";

describe("TrUtils Right Transform Test", () => {
  test("Transform left should scale to the left", () => {
    const rect = {
      x: 50,
      y: 50,
      translateX: -50,
      translateY: 50,
      width: 100,
      height: 100,
      scaledWidth: 150,
      scaledHeight: 100
    };

    for (let i = 0; i <= 210; i++) {
      let mouseEvent = { clientX: i };
      const containerRect = { left: 50 };
      TrUtils.transformLeft({ rect, containerRect, mouseEvent });
      expect(rect.translateY).toBe(50);
      expect(rect.scaledHeight).toBe(100);

      if (i <= 200) {
        expect(rect.translateX).toBe(-100 + i);
        expect(rect.scaledWidth).toBe(200 - i);
      } else {
        expect(rect.translateX).toBe(100);
        expect(rect.scaledWidth).toBe(0);
      }
    }
  });
});
