import { createApp } from "vue";
import App from "./App.vue";
import { Step, Theme } from "./@types/index";
import "./index.css";
import themePresets from "./themePresets";
import validateSteps from "./utils/steps";
import { retrieveTrip, storeTrip } from "./utils/storage";

const ROOT_ID = "wanderer-main";

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
  theme: Theme | Pick<Theme, "preset">;
  constructor(
    steps: Step[],
    theme: Theme | Partial<Theme> = themePresets.LIGHT
  ) {
    this.steps = validateSteps(steps);
    this.theme = { ...themePresets[theme.preset || "LIGHT"], ...theme };
    this.app = null;
  }

  static resume() {
    const storedTrip = retrieveTrip();
    if (!storedTrip) return;
    const trip = new Trip(storedTrip.steps, storedTrip.theme);
    trip.start(storedTrip.currentIndex);
    return trip;
  }

  start(startAt: number = 0) {
    if (this.app) {
      return this.app.start(startAt);
    }
    // @ts-ignore
    this.app = createApp(App, {
      steps: this.steps,
      theme: this.theme,
    }).mount(`#${ROOT_ID}`);

    this.app.start(startAt);

    storeTrip({
      steps: this.steps,
      theme: <Theme>this.theme,
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
