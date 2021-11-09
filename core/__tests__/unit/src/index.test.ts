import Trip from "../../../src";
import { steps, theme } from "../data/data";

describe("index.ts", () => {
  beforeAll(() => {
    const el = document.createElement("div");
    el.innerHTML = `
      <div id="element">Step 1</div>
      <div id="element2">Step 2</div>
      <div id="element3">Step 3</div>
    `;

    document.body.appendChild(el);
  });
  describe("constructor", () => {
    it("should be able to create an instance of the library", () => {
      const trip = new Trip(steps, theme);
      expect(trip).toHaveProperty("steps");
      expect(trip).toHaveProperty("theme");
      expect(trip).toHaveProperty("options");
    });
  });

  describe("start", () => {
    it("should be able to create the UI", () => {
      const trip = new Trip(steps, theme);
      trip.start();
      expect(trip).toHaveProperty("app");
    });
  });
});
