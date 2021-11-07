import { createApp } from "vue";
import App from "./App.vue";
import { HighlightType, ProgressType, Step, StepType } from "./types";
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

export default class Guide {
  steps: any;
  app: null | AppExport;
  constructor(steps: Step[]) {
    this.steps = validateSteps(steps);
    this.app = null;
  }
  start() {
    // @ts-ignore
    this.app = createApp(App, { steps: this.steps }).mount(
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
