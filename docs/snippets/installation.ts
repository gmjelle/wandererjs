const snippet = `import Trip from "wanderer.js";

const steps = [
  {
    progressOn: "ELEMENT",
    element: "#button",
    headerText: "Welcome!",
    bodyText: "Welcome to Wanderer.js",
  },
];

const theme = {
  preset: "DARK",
};

const trip = new Trip(steps, theme);

trip.start();`;

export default {
  snippet,
};
