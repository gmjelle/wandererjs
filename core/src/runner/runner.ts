import { buildTooltip } from '../builder/tooltipBuilder';
import { HighlightType, ProgressType, Step, StepType, TooltipStep } from '../types';
import scrollToElement from 'scroll-to-element';
import { isElementInViewport } from '../utils';

const DEFAULT_PROGRESS_ON: ProgressType = 'BUTTON';
const DEFAULT_TYPE: StepType = 'TOOLTIP';
const DEFAULT_HIGHLIGHT_TYPE: HighlightType = 'NONE';

function getStepTarget(element: string | Element) {
  let target;
  if (typeof element === 'string') {
    target = document.body.querySelector(element);
  } else {
    target = element;
  }

  return target;
}

function scrollToElementIfNecessary(element: Element) {
  const isVisible = isElementInViewport(element);
  if (isVisible) return;
  scrollToElement(element, { offset: -100, duration: 500, ease: 'out-circ' });
}

function processTooltipStep(step: TooltipStep) {
  const target = getStepTarget(step.element);
  if (!target) {
    throw new Error('Target element not found for element: ' + step.element);
  }

  step.element = target;
  scrollToElementIfNecessary(step.element);
  return buildTooltip(step);
}

function validateStep({
  element,
  type = DEFAULT_TYPE,
  progressOn = DEFAULT_PROGRESS_ON,
  highlightType = DEFAULT_HIGHLIGHT_TYPE,
  headerText = '',
  bodyText = '',
}: Step): Step {
  if (!element) {
    throw new Error('Missing property "element"');
  }

  if (!headerText && !bodyText) {
    console.warn(`The ${type} will not have any text because you didn't set the headerText or bodyText properties`);
  }

  const cloned: Step = { element, type, progressOn, highlightType, headerText, bodyText };

  return cloned;
}

export function processStep(currentStep: Step) {
  const validatedStep: Step = validateStep(currentStep);
  console.log(validatedStep);
  switch (validatedStep.type) {
    case 'TOOLTIP':
      return processTooltipStep(validatedStep as TooltipStep);
  }
}
