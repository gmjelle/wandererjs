import { Step } from "../../../../src/types";
import { validateStep } from "../../../../src/utils/steps";

describe("steps.ts", () => {
  describe("validateStep", () => {
    it("should throw an error if missing the element property", () => {
      expect(() => {
        validateStep({} as Step);
      }).toThrow();
    });

    it("should return the input as is if not missing any properties", () => {
      const step: Step = {
        element: "#element",
        type: "TOOLTIP",
        progressOn: "ELEMENT",
        highlightType: "NONE",
        headerText: "Header",
        bodyText: "",
      };

      const validated = validateStep(step);
      expect(validated).toEqual(step);
    });

    it("should add all the missing properties to a step", () => {
      const consoleWarnMock = jest.spyOn(console, "warn").mockImplementation();

      const step: Step = {
        element: "#element",
      };

      const validated = validateStep(step);

      expect(consoleWarnMock).toHaveBeenCalled();
      expect(validated).toEqual({
        element: "#element",
        type: "TOOLTIP",
        progressOn: "BUTTON",
        highlightType: "NONE",
        headerText: "",
        bodyText: "",
      });

      consoleWarnMock.mockRestore();
    });
  });
  describe("validateSteps", () => {});
});
