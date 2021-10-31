import { buildTooltip } from '../builder/builder';
import { Step, StepType, TooltipStep } from '../types';

function processTooltipStep(step: TooltipStep) {
  return buildTooltip(step);
}

export function processStep(currentStep: Step) {
  switch (currentStep.type) {
    case StepType.TOOLTIP:
      return processTooltipStep(<TooltipStep>currentStep);
  }
}
