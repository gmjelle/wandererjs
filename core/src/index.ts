import "./index.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Step, Theme } from "./@types/index";
import { validateSteps } from "./utils/steps";
import { retrieveTrip, storeTrip } from "./utils/storage";
import "./fontawesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import pageLoaded from "./utils/loaded";
import { ROOT_ID } from "./utils/consts";

const root = document.createElement("div");
root.id = ROOT_ID;
document.body.appendChild(root);

interface AppExport {
  next(): void;
  back(): void;
  skipTo(index: number): void;
  addStep(step: Step): void;
  stop(): void;
  start(startAt: number): void;
}

export class Trip {
  steps: Step[];
  app: null | AppExport;
  theme: Theme;
  constructor(steps: Step[], theme: Theme = "WANDERER_LIGHT") {
    validateSteps(steps);
    this.steps = steps;
    this.theme = theme;
    this.app = null;
    root.classList.add(theme);
  }

  static resume() {
    const storedTrip = retrieveTrip();
    if (!storedTrip) return;
    const trip = new Trip(storedTrip.steps, storedTrip.theme);
    trip.start(storedTrip.currentIndex);
    return trip;
  }

  async start(startAt: number = 0) {
    await pageLoaded();
    if (this.app) {
      return this.app.start(startAt);
    }
    // @ts-ignore
    this.app = createApp(App, {
      steps: this.steps,
      theme: this.theme,
    })
      .component("font-awesome-icon", FontAwesomeIcon)
      .mount(`#${ROOT_ID}`);

    this.app.start(startAt);

    storeTrip({
      steps: this.steps,
      theme: this.theme,
      currentIndex: startAt,
    });
  }

  next() {
    this.app?.next();
  }

  back() {
    this.app?.back();
  }

  skipTo(index: number) {
    this.app?.skipTo(index);
  }

  addStep(step: Step) {
    this.app?.addStep(step);
  }

  addSteps(steps: Step[]) {
    steps.forEach((step) => this.addStep(step));
  }

  stop() {
    this.app?.stop();
  }
}
