import { ProgressType, TooltipStep } from '../types';
import Tooltip from './elements/tooltip';
import EventManager from '../lib/EventManager';

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

function createTooltipElement(step: TooltipStep) {
  const tooltip = new Tooltip(step);
  return tooltip;
}

function onNext(tooltipElement: Tooltip) {
  tooltipElement.removeFromDom();
  EventManager.emit('next-step');
}

export function buildTooltip(step: TooltipStep) {
  const target = getStepTarget(step.element);
  if (!target) {
    throw new Error('Target element not found for element: ' + step.element);
  }

  step.element = target;
  const tooltipElement = createTooltipElement(step);

  if (step.progressOn === ProgressType.ELEMENT) {
    target.addEventListener('click', () => onNext(tooltipElement), { once: true });
  }

  return step;
}
