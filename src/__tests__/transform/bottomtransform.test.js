import { TrUtils } from "../../image/transformer/trutils";
describe("TrUtils Bottom Transform", () => {
  test("transform bottom should scale down", () => {
    const rect = {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
      translateX: 0,
      translateY: 50,
      scaledWidth: 100,
      scaledHeight: 100
    };
    for (let i = 210; i > 0; i--) {
      const mouseEvent = { clientY: i };
      TrUtils.transformBottom({ rect, mouseEvent });
      expect(rect.x).toBe(50);
      expect(rect.y).toBe(50);
      expect(rect.translateX).toBe(0);
      expect(rect.translateY).toBe(50);
      expect(rect.width).toBe(100);
      expect(rect.height).toBe(100);
      expect(rect.scaledWidth).toBe(100);
      if (i >= 100) {
        expect(rect.scaledHeight).toBe(i - 100);
      } else {
        expect(rect.scaledHeight).toBe(0);
      }
    }
  });
});
