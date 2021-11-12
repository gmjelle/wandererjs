import { createApp, getCurrentInstance } from "vue";
import App from "./App.vue";
import { Step, Theme } from "./types";
import "./index.css";
import themePresets from "./themePresets";
import validateSteps from "./utils/steps";

const ROOT_ID = "wandererjs-main";

const root = document.createElement("div");
root.id = ROOT_ID;
document.body.appendChild(root);

interface AppExport {
  next(): void;
  back(): void;
  skipTo(index: number): void;
  addStep(step: Step): void;
  stop(): void;
  start(): void;
}

export default class Trip {
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

  start() {
    if (this.app) {
      return this.app.start();
    }

    // @ts-ignore
    this.app = createApp(App, { steps: this.steps, theme: this.theme }).mount(
      `#${ROOT_ID}`
    );

    this.app.start();
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
