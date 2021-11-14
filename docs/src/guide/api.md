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
trip.start(2);
```

### `.stop()`

In the event that you want to stop the trip from progressing, you can, at any point call the `.stop()` method and it will completely stop the trip.

```js
const trip = new Trip(steps);
trip.start();
...
...
...
// At some later point
trip.stop();
```

## Step

A `step` is a single step (for lack of a better word) on a trip.

## Theme
