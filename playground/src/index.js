import Guide from "@guidance/core";
const guide = new Guide([
  {
    headerText: "Header",
    bodyText: "Body",
    element: "#element",
    progressOn: "ELEMENT",
    highlightType: "HARD",
  },
  {
    headerText: "Header",
    bodyText: "Body",
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
]);

setTimeout(() => {
  guide.start();
}, 1000);
