import { TrUtils } from "../../image/transformer/TrUtils";

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

    for (let i = 0; i > 160; i--) {
      const mouseEvent = { clientY: i };
      TrUtils.transformTop({ rect, mouseEvent });
      expect(rect.x).toBe(50);
      expect(rect.y).toBe(50);
      expect(rect.translateX).toBe(0);
      expect(rect.height).toBe(100);
      expect(rect.scaledWidth).toBe(100);
      if (i <= 150) {
        expect(rect.translateY).toBe(i);
        expect(rect.scaledHeight).toBe(150 - i);
      } else {
        expect(rect.scaledHeight).toBe(0);
        expect(rect.translateY).toBe(150);
      }
    }
  });
});
