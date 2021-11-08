import { createApp } from "vue";
import App from "./App.vue";
import {
  HighlightType,
  Options,
  ProgressType,
  Step,
  StepType,
  Theme,
} from "./types";
import "./index.css";
import themePresets from "./themePresets";

const root = document.createElement("div");
root.id = "main";
root.className = "guidance";
document.body.appendChild(root);

const DEFAULT_PROGRESS_ON: ProgressType = "BUTTON";
const DEFAULT_TYPE: StepType = "TOOLTIP";
const DEFAULT_HIGHLIGHT_TYPE: HighlightType = "NONE";

function validateStep({
  element,
  type = DEFAULT_TYPE,
  progressOn = DEFAULT_PROGRESS_ON,
  highlightType = DEFAULT_HIGHLIGHT_TYPE,
  headerText = "",
  bodyText = "",
}: Step): Step {
  if (!element) {
    throw new Error('Missing property "element"');
  }

  if (!headerText && !bodyText) {
    console.warn(
      `The ${type} will not have any text because you didn't set the headerText or bodyText properties`
    );
  }

  const cloned: Step = {
    element,
    type,
    progressOn,
    highlightType,
    headerText,
    bodyText,
  };

  return cloned;
}

function validateSteps(steps: Step[]) {
  return steps.map((step) => validateStep(step));
}

interface AppExport {
  next: () => {};
  back: () => {};
}

export default class Guide {
  steps: Step[];
  app: null | AppExport;
  theme: Theme;
  options: Options;
  constructor(
    steps: Step[],
    theme: Theme = themePresets.LIGHT,
    options: Options
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
