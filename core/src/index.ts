import { createApp } from "vue";
import App from "./App.vue";
import { HighlightType, ProgressType, Step, StepType, Theme } from "./types";
import "./index.css";

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

const DEFAULT_THEME: Theme = {
  backgroundColor: "#FFF",
  textColor: "#000",
  fontFamily: "sans-serif",
  headerSize: "24px",
  bodySize: "16px",
  buttonColor: "#3B82F6",
  buttonTextColor: "#FFF",
};

export default class Guide {
  steps: Step[];
  app: null | AppExport;
  theme: Theme;
  constructor(steps: Step[], theme: Theme = DEFAULT_THEME) {
    this.steps = validateSteps(steps);
    this.theme = { ...DEFAULT_THEME, ...theme };
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
