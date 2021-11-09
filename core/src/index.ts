import { createApp } from "vue";
import App from "./App.vue";
import { Options, Step, Theme, ThemePreset } from "./types";
import "./index.css";
import themePresets from "./themePresets";
import validateSteps from "./utils/steps";

const root = document.createElement("div");
root.id = "main";
root.className = "guidance";
document.body.appendChild(root);

interface AppExport {
  next: () => {};
  back: () => {};
}

export default class Guide {
  steps: Step[];
  app: null | AppExport;
  theme: Theme | Pick<Theme, "preset">;
  options: Options;
  constructor(
    steps: Step[],
    theme: Theme | Partial<Theme> = themePresets.LIGHT,
    options: Options = { showCloseButton: false }
  ) {
    this.steps = validateSteps(steps);
    this.theme = { ...themePresets[theme.preset || "LIGHT"], ...theme };
    this.options = options;
    this.app = null;
  }

  start() {
    // @ts-ignore
    this.app = createApp(App, { steps: this.steps, theme: this.theme }).mount(
      "#main"
    ) as AppExport;
  }

  next() {
    this.app?.next();
  }

  back() {
    this.app?.back();
  }
}
