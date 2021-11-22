import {
  HighlightType,
  ProgressType,
  Step,
  StepType,
  TooltipStep,
} from "../@types";
import { warn } from "./logger";

export const DEFAULT_PROGRESS_ON: ProgressType = "BUTTON";
export const DEFAULT_TYPE = "TOOLTIP";
export const DEFAULT_HIGHLIGHT_TYPE: HighlightType = "NONE";

function validateTooltipStep({
  element,
  type = DEFAULT_TYPE,
  progressOn = DEFAULT_PROGRESS_ON,
  highlightType = DEFAULT_HIGHLIGHT_TYPE,
  headerText = "",
  bodyText = "",
}: TooltipStep) {
  if (!element) {
    throw new Error('Missing property "element"');
  }

  if (!headerText && !bodyText) {
    warn(
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

function validateCustomStep(step: Step) {
  return step;
}

export function validateStep(step: Step): Step {
  switch (step.type) {
    case "TOOLTIP":
      return validateTooltipStep(step);

    case "CUSTOM":
      return validateCustomStep(step);

    default:
      return validateTooltipStep(step);
  }
}

export default function validateSteps(steps: Step[] = []) {
  return steps.map((step) => validateStep(step));
}
