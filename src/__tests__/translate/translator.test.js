import { handleTranslate } from "../../image/translator/eventhandler";
describe("Event Handler Test", () => {
  test("translator should move", () => {
    let dummyState = {
      data: {
        x: 0,
        y: 0
      },
      imageId: "uniqueId",
      targetType: "translator",
      startPoint: {
        x: 50,
        y: 50,
        dataX: 0,
        dataY: 0
      }
    };

    const mouseEvent = {
      clientX: 100,
      clientY: 100
    };

    handleTranslate(mouseEvent, dummyState);
    expect(dummyState.data.x).toBe(50);
    expect(dummyState.data.y).toBe(50);
    expect(dummyState.imageId).toBe("uniqueId");
    expect(dummyState.targetType).toBe("translator");
  });

  test("translator should move 2", () => {
    let dummyState = {
      data: {
        x: 50,
        y: 50
      },
      imageId: "uniqueId",
      targetType: "translator",
      startPoint: {
        x: 50,
        y: 50,
        dataX: 50,
        dataY: 50
      }
    };

    const mouseEvent = {
      clientX: 100,
      clientY: 100
    };

    handleTranslate(mouseEvent, dummyState);
    expect(dummyState.data.x).toBe(100);
    expect(dummyState.data.y).toBe(100);
    expect(dummyState.imageId).toBe("uniqueId");
    expect(dummyState.targetType).toBe("translator");
  });

  test("translator should move 3", () => {
    let dummyState = {
      data: {
        x: 50,
        y: 50
      },
      imageId: "uniqueId",
      targetType: "translator",
      startPoint: {
        x: 50,
        y: 50,
        dataX: 50,
        dataY: 50
      }
    };

    let mouseEvent = {
      clientX: 60,
      clientY: 60
    };

    handleTranslate(mouseEvent, dummyState);
    expect(dummyState.data.x).toBe(60);
    expect(dummyState.data.y).toBe(60);
    expect(dummyState.imageId).toBe("uniqueId");
    expect(dummyState.targetType).toBe("translator");

    mouseEvent = {
      clientX: 70,
      clientY: 70
    };

    handleTranslate(mouseEvent, dummyState);
    expect(dummyState.data.x).toBe(70);
    expect(dummyState.data.y).toBe(70);
    expect(dummyState.imageId).toBe("uniqueId");
    expect(dummyState.targetType).toBe("translator");
  });
});
