import { Step, Theme } from "../../../src/types";

export const steps: Step[] = [
  {
    headerText: "Add to cart button",
    bodyText:
      "Click here to add this picture to your favorites. And some more text to make it long",
    element: "#element",
    progressOn: "ELEMENT",
    highlightType: "HARD",
  },
  {
    headerText: "Another header",
    bodyText: "Body text goes here",
    element: "#element2",
    progressOn: "BUTTON",
  },
  {
    headerText: "Header",
    bodyText: "Body",
    element: "#element3",
    progressOn: "ELEMENT",
    highlightType: "HARD",
  },
];

export const theme: Pick<Theme, "preset"> = {
  preset: "DARK",
};