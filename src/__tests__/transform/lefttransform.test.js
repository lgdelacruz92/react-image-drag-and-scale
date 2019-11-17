import { TrUtils } from "../../image/transformer/trutils";

describe("TrUtils Right Transform Test", () => {
  test("Transform left should scale to the left", () => {
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

    for (let i = 0; i <= 160; i++) {
      let mouseEvent = { clientX: i };
      TrUtils.transformLeft({ rect, mouseEvent });
      expect(rect.translateY).toBe(0);
      expect(rect.scaledHeight).toBe(100);

      if (i <= 150) {
        expect(rect.translateX).toBe(-50 + i);
        expect(rect.scaledWidth).toBe(150 - i);
      } else {
        expect(rect.translateX).toBe(100);
        expect(rect.scaledWidth).toBe(0);
      }
    }
  });
});
