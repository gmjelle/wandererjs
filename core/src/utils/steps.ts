import { HighlightType, ProgressType, Step, StepType } from "../types";

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

export default function validateSteps(steps: Step[]) {
  return steps.map((step) => validateStep(step));
}
