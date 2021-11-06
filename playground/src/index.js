import Guide from "guidance-core-vue";

new Guide([
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
]).start();
