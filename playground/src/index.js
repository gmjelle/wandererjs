import Guide from "guidance-core-vue";

const g = new Guide([
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
  g.start();
}, 1000);
