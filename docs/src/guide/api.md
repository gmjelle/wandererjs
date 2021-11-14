## Trip

A trip is the name of the class that you instantiate when you want to create a new user-onboaring flow. It has a whole bunch of methods to allow you to programatically control the user's progress throughout the trip.

<hr>

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

A `step` is a single step (for lack of a better word) on a trip.

## Theme
