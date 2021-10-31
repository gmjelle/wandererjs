import { HighlightType, ProgressType, TooltipStep } from '../types';
import Tooltip from './elements/tooltip';
import EventManager from '../lib/EventManager';
import { container } from 'tsyringe';
import SoftBackdrop from '../backdrops/SoftBackdrop';
import HardBackdrop from '../backdrops/HardBackdrop';
import { Step } from '../../lib/types';

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

function hideBackdrops() {
  container.resolve(SoftBackdrop).hide();
  container.resolve(HardBackdrop).hide();
}

function onNext(tooltipElement: Tooltip) {
  tooltipElement.removeFromDom();
  hideBackdrops();
  EventManager.emit('next-step');
}

function showBackdropForStep(step: TooltipStep) {
  switch (step.highlightType) {
    case HighlightType.SOFT:
      return container.resolve(SoftBackdrop).show(<Element>step.element);
    case HighlightType.HARD:
      return container.resolve(HardBackdrop).show(<Element>step.element);
  }
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

  showBackdropForStep(step);

  return step;
}
