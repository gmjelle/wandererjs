# Advanced Usage

In this section we'll go over some advanced use cases.

## Multi-page Trips

There may be some cases that a `Trip` will need to span across multiple pages. Wanderer.js attempts to make the API for this as simple as possible, but I'm open to suggestions on making it even more intuitive.

```js
import Trip from "wanderer.js";

const steps = [
  {
    headerText: "Welcome!",
    bodyText: "Welcome to Wanderer.js",
    element: "#first-element",
  },
  {
    headerText: "Sign In",
    bodyText: "Click on this button to start the sign-in process",
    element: "#second-element",
  },
  {
    headerText: "Almost There",
    bodyText: "Click here to actually sign into your account",
    element: "#third-element",
  },
];

const trip = new Trip(steps);

trip.start();
```

Now imagine a flow like this:

- User clicks on the first element
- User clicks on the second element
- The page is reloaded

We're now in a state where we no longer have a reference to the active `trip`.

So in order to resume the active trip all you have to do is the following

```js
import Trip from "wanderer.js";
const trip = Trip.resume();
```

And that's it. A tooltip will be shown on the element that's in the 3rd step.
