---
title: API
description: ""
category: "API"
position: 2
---

In this section, we'll take a deep dive into all the configuration options that are available

## Step

In this section we'll go over the structure of a `Step`. Essentially, a `Step` is an object which defines a single step within a `Trip`. You can pass an array of `Steps` when creating a new `Trip`. First we'll outline all the properties that can exist on a `Step`

```js
const step = {
  type: "TOOLTIP", // This is currently the only type
  highlightType: "HARD" | "SOFT" | "NONE",
  progressOn: "ELEMENT" | "BUTTON",
  element: "#element" | document.body.querySelector("#element"),
  headerText: "Welcome!",
  bodyText: "Welcome to Wanderer.js",
};

const trip = new Trip([step]);
```

### `Step.type`

This property denotes what onboarding element will be shown for this step. Currently the only option is `TOOLTIP`, but in the future this will be extended with other options.

---

### `Step.highlightType`

This property controls how the target element will be emphasized on screen. The current options are `HARD`, `SOFT` or `NONE`.

**`Step.highlightType = "SOFT"`**

- This creates a soft highlight around the target element as seen here:

```js
const step = {
  highlightType: "SOFT",
};
```

**`Step.highlightType = "HARD"`**

- This creates a hard highlight around the target element

```js
const step = {
  highlightType: "HARD",
};
```

**`Step.highlightType = "NONE"`**

- This just shows the tooltip on the target element without any highlight

```js
const step = {
  highlightType: "NONE",
};
```

### `Step.progressOn`

This property controls how the user progresses from one step to the next. There current options are - `ELEMENT` and `BUTTON`.

**`Step.progressOn = "ELEMENT"`**

This option means that the user will be shown the next step once they click on the target element. This option can be useful when the target element of the next step appears only after the user interacts with the target element of the current step. You can think of this option as more of a guided trip where the user interacts with your website.

**`Step.progressOn = "BUTTON"`**

This option means that the user will be shown the next step once they click on the next button. This option can be useful when you just want to show your user around a single page.

### `Step.element`

You can use this property to tell Wanderer.js, which element you want the tooltip to target. This can either be a selector of the element, or a reference to the element itself.

```js
const step = {
  element: "#button",
};
```

**OR**

```js
const step = {
  element: document.body.querySelector("#button");
}
```

### `Step.headerText`

This is the text that you want to appear in the tooltip header:

```js
const step = {
  headerText: "Welcome!",
};
```

and related to this property, we have:

### `Step.bodyText`

This is the text that you want to appear in the tooltip body:

```js
const step = {
  bodyText: "Click here to sign in",
};
```

## Theming - Coming Soon!!!

Currently there are 3 options that you can pass as the second argument to the `Trip` constructor.

- `new Trip(steps, "WANDERER_LIGHT")`
- `new Trip(steps, "WANDERER_DARK")`
- `new Trip(steps, "WANDERER_BLUE")`

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

const theme = {
    backgroundColor: "#FFF",
    textColor: "#000",
    fontFamily: "sans-serif",
    headerSize: "24px",
    bodySize: "16px",
    nextButtonColor: "#3B82F6",
    nextButtonTextColor: "#FFF",
    border: "1px solid #D1D5DB"
}

const trip = new Trip(steps, theme);
trip.start();
```
