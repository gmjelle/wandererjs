# Installation

The simplest way to get started with Wanderer.js is to install it using `npm`

```sh
npm i wanderer.js
```

And then in your codebase somewhere you can use it like this:

```js
import Trip from "wanderer.js"

const steps = [
  {
	progressOn: "ELEMENT",
	element: "#button",
	headerText: "Welcome!",
	bodyText: "Welcome to Wanderer.js"
  }
];

const theme = {
  preset: "DARK"
]

const trip = new Trip(steps, theme);

trip.start();

```

This will create a tooltip that looks something like this.

<div style="width: 100%; display: flex; justify-content: center;">
    <img style="height: 250px" :src="$withBase('/tooltip-step-1.png')" />
</div>

And when you click on the "Sign In" button, the trip will be finished (since there is only one step)

### Other installation methods

You can also use Wanderer.js by including it in your HTML file at the following URL
[https://unpkg.com/wanderer.js](https://unpkg.com/wanderer.js)

```html
<scrtipt src="https://unpkg.com/wanderer.js"></script>

<script>
    const trip = new Trip(steps, theme);
</script>
```

Next up we'll go over the different customization options in more depth.
