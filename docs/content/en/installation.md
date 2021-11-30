---
title: Installation
description: ""
position: 1
category: "Guide"
---

The simplest way to get started with Wanderer.js is to install it using `npm`

```sh
npm i wanderer.js
```

And then in your codebase somewhere you can use it like this:

```js
import { Trip } from "wanderer.js";

const steps = [
  {
    type: "MODAL",
    align: "CENTER",
    headerText: "Onboarding Elements",
    bodyText:
      "Currently WandererJS has two different types of onboarding elements. Modals (like this), and Tooltips.",
    imageSource:
      "https://raw.githubusercontent.com/yaakov123/wandererjs/master/assets/logo.png",
  },
  {
    type: "TOOLTIP",
    headerText: "Tooltip Example",
    bodyText:
      "And this is a tooltip. It's useful for indicating to the user where a certain UI element is.",
    element: "#why-product-tours",
  },
];

const theme = "WANDERER_LIGHT";

const trip = new Trip(steps, theme);

trip.start();
```

This will produce the elements you see in the following GIF

<img src="/installation-gif.gif" />

### Other installation methods

You can also use Wanderer.js by including it in your HTML file at the following URL
[https://unpkg.com/wanderer.js](https://unpkg.com/wanderer.js)

```html
<scrtipt src="https://unpkg.com/wanderer.js"></script>

<script>
    const { Trip } = window.Wanderer;
    const trip = new Trip(steps, theme);
</script>
```

Next up we'll go over the different customization options in more depth.
