import { buildTooltip } from '../builder/tooltipBuilder';
import { Step, StepType, TooltipStep } from '../types';
import scrollToElement from 'scroll-to-element';
import { isElementInViewport } from '../utils';

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

export function processStep(currentStep: Step) {
  switch (currentStep.type) {
    case 'TOOLTIP':
      return processTooltipStep(currentStep as TooltipStep);
  }
}
