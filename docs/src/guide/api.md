# API

In this section, we'll take a deep dive into all the configuration options that are available

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

## Step

In this section we'll go over the structure of a `Step`. Essentially, a `Step` is an object which defines a single step within a `Trip`. As you saw in the previous section, you pass an array of `Steps` when creating a new `Trip`. First we'll outline all the properties that can exist on a `Step`

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

<div style="width: 100%; display: flex; justify-content: center;">
    <img style="width: 100%" :src="$withBase('/tooltip-soft.png')" />
</div>

**`Step.highlightType = "HARD"`**

- This creates a hard highlight around the target element

```js
const step = {
  highlightType: "HARD",
};
```

<div style="width: 100%; display: flex; justify-content: center;">
    <img style="width: 100%" :src="$withBase('/tooltip-hard.png')" />
</div>

**`Step.highlightType = "NONE"`**

- This just shows the tooltip on the target element without any highlight

```js
const step = {
  highlightType: "NONE",
};
```

<div style="width: 100%; display: flex; justify-content: center;">
    <img style="width: 100%" :src="$withBase('/tooltip-none.png')" />
</div>

### `Step.progressOn`

This property controls how the user progresses from one step to the next. There current options are - `ELEMENT` and `BUTTON`.

**`Step.progressOn = "ELEMENT"`**

This option means that the user will be shown the next step once they click on the target element. This option can be useful when the target element of the next step appears only after the user interacts with the target element of the current step. You can think of this option as more of a guided trip where the user interacts with your website.

In the example below, the user will need to click on the "Sign In" button in order to progress to the next step.

<div style="width: 100%; display: flex; justify-content: center;">
    <img style="height: 250px" :src="$withBase('/tooltip-none.png')" />
</div>

**`Step.progressOn = "BUTTON"`**

This option means that the user will be shown the next step once they click on the next button. This option can be useful when you just want to show your user around a single page.

In the example below, the user will need to click on the next button in order to progress to the next step

<div style="width: 100%; display: flex; justify-content: center;">
    <img style="height: 250px" :src="$withBase('/tooltip-next-button.png')" />
</div>

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

Below is an example of what using `.bodyText` and `.headerText` looks like visually:

<div style="width: 100%; display: flex; justify-content: center;">
    <img style="height:250px" :src="$withBase('/tooltip-none.png')" />
</div>

## Theme

The `Theme` object is the second paramter that you pass to the Trip constructor. In theory, Wanderer.js strives to look good in all settings, but there will be certain times when you'd like to customize the look and feel of the tooltips. As before, first off we'll outline all the properties that can exist on a `Theme`

```js
const theme = {
  preset: "LIGHT" | "DARK";
  backgroundColor: "#1F2937";
  textColor: "#FFF";
  headerTextColor: "#FFF";
  bodyTextColor: "#FFF";
  fontFamily: "sans-serif";
  headerSize: "24px";
  bodySize: "16px";
  buttonColor: "#3B82F6",
  buttonTextColor: "#FFF",
  border: "1px solid red",
}

const trip = new Trip(steps, theme);
```

Whew, that's a lot to take in. Let's break it down one by one

### `Theme.preset`

As you can see in the above code snippet, there are a lot of theme options, and in the future there will probably be even more. So in order to save you time, there are a couple of theme presets that you can use in order to save time. The two that are currently supported are `"LIGHT"` and `"DARK"`:

---

<div style="display: flex;">
  <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
      <code>DARK</code>
      <img style="width:100%; margin-top: 5px" :src="$withBase('/tooltip-dark.png')" />
  </div>
  <div style="width: 100%; display: flex; flex-direction: column; align-items: center;">
      <code>LIGHT</code>
      <img style="width:100%;margin-top: 5px" :src="$withBase('/tooltip-light.png')" />
  </div>
</div>

---

`Theme.backgroundColor` - The background color of the tooltip

`Theme.textColor` - The color of all the text in the tooltip

`Theme.headerTextColor` - The color the header text should be (_This overrides `Theme.textColor`_)

`Theme.bodyTextColor` - The color the body text should be (_This overrides `Theme.textColor`_)

`Theme.fontFamily` - This font family for the text in the tooltip

`Theme.headerSize` - This font size for the header text in the tooltip

`Theme.bodySize` - This font size for the body text in the tooltip

`Theme.buttonColor` - The background color of the button (_When `Step.progressOn="BUTTON"`_)

`Theme.buttonTextColor` - The color of the text inside the button (_When `Step.progressOn="BUTTON"`_)

`Theme.border` - Styling options for a border around the tooltip (_This needs to be a valid CSS border styling string_)

## Defaults

Okay, so we've gone over pretty much all of the options that you can provide to the `Trip` constructor. A way that Wanderer.js tries to make life easier for you is by providing sensible defaults so that you can get started with as little code as possible. So let's go over these defaults.

First let's take a look at the minimum possible code you can write to create a valid `Trip`

```js
import Trip from "wanderer.js";

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
    buttonColor: "#3B82F6",
    buttonTextColor: "#FFF",
    border: "1px solid #D1D5DB"
}

const trip = new Trip(steps, theme);
trip.start();
```
