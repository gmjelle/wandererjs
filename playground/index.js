import Guide from "guidance-core";
const g = new Guide([
  {
    type: "TOOLTIP",
    element: "#step-1",
    headerText: "Step 1",
    bodyText: "Click here for step 1",
    progressOn: "ELEMENT",
    highlightType: "HARD",
  },
  {
    type: "TOOLTIP",
    element: "#step-2",
    headerText: "Step 2",
    bodyText: "Click here for step 2",
    progressOn: "ELEMENT",
    highlightType: "SOFT",
  },
]);

g.start();
