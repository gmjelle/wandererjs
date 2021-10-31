import { TooltipStep } from '../types';
import Tooltip from './elements/tooltip';

function getElementBySelector(selector: string) {
  return document.body.querySelector(selector);
}

function getStepTarget(element: string | Element) {
  let target;
  if (typeof element === 'string') {
    target = getElementBySelector(element);
  } else {
    target = element;
  }

  return target;
}

function getTooltipMarkup(headerText: string, bodyText: string) {}

function createTooltipElement(step: TooltipStep) {
  const tooltip = new Tooltip(step);
}

export function buildTooltip(step: TooltipStep) {
  const target = getStepTarget(step.element);
  if (!target) {
    throw new Error('Target element not found for element: ' + step.element);
  }

  step.element = target;

  const tooltipElement = createTooltipElement(step);
}
