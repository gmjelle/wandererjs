import { HighlightType, ProgressType, TooltipStep } from '../types';
import Tooltip from './elements/tooltip';
import EventManager from '../lib/EventManager';
import { container } from 'tsyringe';
import SoftBackdrop from '../backdrops/SoftBackdrop';
import HardBackdrop from '../backdrops/HardBackdrop';

function createTooltipElement(step: TooltipStep) {
  const tooltipElement = new Tooltip(step);
  EventManager.once('nextStep.tooltip', () => {
    onNext(tooltipElement);
  });
  return tooltipElement;
}

function hideBackdrops() {
  container.resolve(SoftBackdrop).hide();
  container.resolve(HardBackdrop).hide();
}

function onNext(tooltipElement: Tooltip) {
  tooltipElement.removeFromDom();
  hideBackdrops();
  EventManager.emit('nextStep.tooltipBuilder');
}

function showBackdropForStep(step: TooltipStep) {
  switch (step.highlightType) {
    case HighlightType.SOFT:
      return container.resolve(SoftBackdrop).show(step.element as Element);
    case HighlightType.HARD:
      return container.resolve(HardBackdrop).show(step.element as Element);
  }
}

export function buildTooltip(step: TooltipStep) {
  createTooltipElement(step);
  showBackdropForStep(step);
  return step;
}
