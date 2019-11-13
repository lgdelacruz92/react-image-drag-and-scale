import { handleTranslate } from "../../image/translator";
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

    const newState = handleTranslate(mouseEvent, dummyState);
    expect(newState.data.x).toBe(50);
    expect(newState.data.y).toBe(50);
    expect(newState.imageId).toBe("uniqueId");
    expect(newState.targetType).toBe("translator");
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

    const newState = handleTranslate(mouseEvent, dummyState);
    expect(newState.data.x).toBe(100);
    expect(newState.data.y).toBe(100);
    expect(newState.imageId).toBe("uniqueId");
    expect(newState.targetType).toBe("translator");
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

    let newState = handleTranslate(mouseEvent, dummyState);
    expect(newState.data.x).toBe(60);
    expect(newState.data.y).toBe(60);
    expect(newState.imageId).toBe("uniqueId");
    expect(newState.targetType).toBe("translator");

    mouseEvent = {
      clientX: 70,
      clientY: 70
    };

    newState = handleTranslate(mouseEvent, dummyState);
    expect(newState.data.x).toBe(70);
    expect(newState.data.y).toBe(70);
    expect(newState.imageId).toBe("uniqueId");
    expect(newState.targetType).toBe("translator");
  });
});
