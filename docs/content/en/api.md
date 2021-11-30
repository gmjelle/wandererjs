---
title: API
description: ""
category: "API"
position: 2
---

In this section, we'll take a deep dive into all the configuration options that are available

## Step

A `Step` is the first parameter that goes into the `Trip` constructor. There are two different types of steps at the moment, but more will be added as time goes on

There are two types of steps at the moment

### Modal

The structure of a `Modal` step is as follows:

```js
import { Trip } from "wanderer.js";

const step = {
  type: "MODAL", // Options are "MODAL" or "TOOLTIP"
  headerText: "Welcome!", // The text you'd like to appear in the body of the modal
  bodyText: "Welcome to Wanderer.js", //
  // The source of the image you want to add to the modal
  imageSource:
    "https://raw.githubusercontent.com/yaakov123/wandererjs/master/assets/logo.png",
};

const trip = new Trip([step]);
```

### Tooltip

The structure of a `Tooltip` step is as follows:

```js
import { Trip } from "wanderer.js";

const step = {
  type: "TOOLTIP", // Options are "MODAL" or "TOOLTIP"
  highlightType: "HARD" | "SOFT" | "NONE", // Controls what sort of backdrop appears to highlight the element on screen
  progressOn: "ELEMENT" | "BUTTON", // Should the user progress to the next step by clicking on the element or the next button
  element: "#element" | document.body.querySelector("#element"), // What element should the tooltip attach to
  headerText: "Welcome!", // The text you want to appear in the heading of the tooltip
  bodyText: "Welcome to Wanderer.js", // The text you want to appear in the body of the tooltip
};

const trip = new Trip([step]);
```

## Theming

Currently there are 3 options that you can pass as the second argument to the `Trip` constructor.

- `new Trip(steps, "WANDERER_LIGHT")`
- `new Trip(steps, "WANDERER_DARK")`
- `new Trip(steps, "WANDERER_BLUE")`

### Custom Theme

In the event that none of the default themes meets your requirements, you can always create a completely custom theme. Let's say you want to create a new theme called WANDERER_PURPLE. All you have to do is add the following css to your project:

```css
.WANDERER_PURPLE .wanderer-tooltip {
  background-color: #6d28d9;
  color: #fff;
  border: none;
}

.WANDERER_PURPLE .wanderer-button-wrapper {
  background-color: #6d28d9;
  color: #fff;
}

.WANDERER_PURPLE .wanderer-tooltip-arrow::before {
  background-color: #6d28d9;
  border: none;
}

.WANDERER_PURPLE .wanderer-modal {
  background-color: #6d28d9;
  color: #fff;
  border: none;
}
```

And then when you create a new `Trip`, pass it in as the second argument.

```js
const trip = new Trip(steps, "WANDERER_PURPLE");
```

## Trip

A trip is the name of the class that you instantiate when you want to create a new user-onboaring flow. It has a whole bunch of methods to allow you to programatically control the user's progress throughout the trip.

---

### `.start()`

The first important method is the `.start()` method. This is how you actually start the trip process and show the first tooltip.

```js
const trip = new Trip(steps);
trip.start();
```

It also optionally accepts an argument that tells it at what step index to start at.

_**IMPORTANT - Wanderer.js uses 0-based indexing**_

```js
const trip = new Trip(steps);
trip.start(2); // Will start at the 3rd step
```

### `.stop()`

In the event that you want to stop the trip from progressing, you can, at any point call the `.stop()` method and it will completely stop the trip.

```js
const trip = new Trip(steps);
trip.start();
...
...
// At some later point
trip.stop();
```

### `.next()`

If you want to programatically go to the next step in the trip, without the user interacting, you can call the `.next()` method.

```js
const trip = new Trip(steps);
trip.start();
...
...
trip.next();
```

### `.back()`

If you want to programatically go to the previous step in the trip, without the user interacting, you can call the `.back()` method.

```js
const trip = new Trip(steps);
trip.start();
...
trip.next();
...
trip.back();
```

### `.skipTo(index)`

If you want to skip to a specific step in the trip, you can call the `.skipTo(index)` method. Note that Wanderer.js uses 0-based indexing.

```js
const trip = new Trip(steps);
trip.start();
...
...
trip.skipTo(2); // Will skip to the 3rd step
```

### `.addStep(step)`

You can dynamically add a step to the end of the trip using this method. This can be useful for creating non-linear trips. Meaning, that, based on a certain interaction, you can send them down a different path.

```js
const trip = new Trip(steps);
trip.start();

if (user.isLoggedIn) {
  trip.addStep(stepForLoggedInUser);
} else {
  trip.addStep(stepForLoggedOutUser);
}
```

### `.addSteps(steps)`

This method is does the same thing as the `.addStep(step)` method, except that you can pass an array of steps instead of just a single one

```js
const trip = new Trip(steps);
trip.start();

if (user.isLoggedIn) {
  trip.addStep([stepForLoggedInUser1, stepForLoggedInUser2]);
} else {
  trip.addStep([stepForLoggedOutUser1, stepForLoggedOutUser2]);
}
```

## Defaults

Okay, so we've gone over pretty much all of the options that you can provide to the `Trip` constructor. A way that Wanderer.js tries to make life easier for you is by providing sensible defaults so that you can get started with as little code as possible. So let's go over these defaults.

First let's take a look at the minimum possible code you can write to create a valid `Trip`

```js
import { Trip } from "wanderer.js";

const steps = [
  {
    element: "#button",
    // You don't really even need to provide this if you don't want a header
    headerText: "Welcome!",
    bodyText: "Welcome to Wanderer.js",
  },
];

const trip = new Trip(steps);
trip.start();
```

Behind the scens, Wanderer.js will act as if you provided the following to the `Trip` constructor:

```js
const steps = [
  {
    element: "#button",
    headerText: "Welcome!",
    bodyText: "Welcome to Wanderer.js",
    // Auto-generated starting here
    type: "TOOLTIP"
    progressOn: "BUTTON",
    highlightType: "NONE"
  },
];

const theme = "WANDERER_LIGHT"

const trip = new Trip(steps, theme);
trip.start();
```
