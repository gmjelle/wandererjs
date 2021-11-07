import Guide from "@guidance/core";
const guide = new Guide([
  {
    headerText: "Favorites button",
    bodyText:
      "Click here to add this picture to your favorites. And some more text to make it long",
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
