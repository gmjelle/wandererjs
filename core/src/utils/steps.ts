import {
  HighlightType,
  ProgressType,
  Step,
  StepType,
  TooltipStep,
} from "../@types";
import { warn } from "./logger";

function validateTooltipStep(step: TooltipStep) {
  if (!step.element) {
    throw new Error('Missing property "element"');
  }

  if (!step.headerText && !step.bodyText) {
    warn(
      `The ${step.type} will not have any text because you didn't set the headerText or bodyText properties`
    );
  }
}

function validateCustomStep(step: Step) {}

export function validateStep(step: Step): void {
  switch (step.type) {
    case "TOOLTIP":
      validateTooltipStep(step);

    case "CUSTOM":
      validateCustomStep(step);

    default:
      validateTooltipStep(step as TooltipStep);
  }
}

export function validateSteps(steps: Step[] = []): void {
  steps.map((step) => validateStep(step));
}

export const DEFAULT_PROGRESS_ON: ProgressType = "ELEMENT";
export const DEFAULT_TYPE = "TOOLTIP";
export const DEFAULT_HIGHLIGHT_TYPE: HighlightType = "NONE";
export const DEFAULT_SHOW_ARROW: boolean = true;

function getTooltipStepWithDefaults({
  type = DEFAULT_TYPE,
  highlightType = DEFAULT_HIGHLIGHT_TYPE,
  progressOn = DEFAULT_PROGRESS_ON,
  showArrow = true,
  headerText,
  bodyText,
  element,
}: TooltipStep) {
  return {
    type,
    highlightType,
    progressOn,
    showArrow,
    headerText,
    bodyText,
    element,
  };
}

export function getStepWithDefaults(step: Step): Step {
  if (!step.type) step.type = DEFAULT_TYPE;

  switch (step.type) {
    case "TOOLTIP":
      return getTooltipStepWithDefaults(step);

    default:
      return step;
  }
}
