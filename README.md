# Name

Wanderer.js

# Description

Wanderer.js is an easy-to user, customizable user-onboarding library

# Motivation

I created Wanderer.js for 3 main reasons.

1. I constantly make new websites, and the one thing that they always need is some form of onboarding to show users what to do.
2. I can't afford the exorbitant prices the existing commercial tools charge
3. The existing open source libraries create tooltips that don't look very nice (in my opinion) and were missing some crucial functionality

# Features

Currently, the only onboarding UI element that Wanderer.js is able to create are tooltips, and it does that very well (IMHO). In the future I plan on adding:

1. Modals (For the introduction to the trip)
2. Hotspots (As indicators for where to click)

# Installation

You can install the package with npm using:

```bash
npm i wanderer.js
```

# Usage

```javascript
// Import the library
import Trip from "wanderer.js";

// All the configuration options can be found [HERE]
const steps: Step = [
  {
    type: "TOOLTIP",
    highlightType: "HARD" // HARD | SOFT | NONE,
    progressOn: "ELEMENT" // ELEMENT | BUTTON,
    element: "#element" // Selector | Actual Element
    headerText: "Welcome!",
    bodyText: "Welcome to our great app"
  },
];

const theme = { preset: "DARK" };

const trip = new Trip(steps, theme);

trip.start();
```

This will generate a tooltip that looks like this:

[INSERT IMAGE HERE]
