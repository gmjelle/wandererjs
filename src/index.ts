import './css/index.css';

import { processStep } from './runner/runner';
import { Step, TooltipStep } from './types';

class Guide {
  steps: Step[] | TooltipStep[];
  currentIndex: number;
  constructor(steps: Step[]) {
    this.steps = steps;
    this.currentIndex = 0;
  }
  start() {
    const currentStep = this.steps[this.currentIndex];
    if (!currentStep) return;

    processStep(this.steps[this.currentIndex]);
  }
  skipTo(index: number) {}
  next() {}
  back() {}
  stop() {}
}

export default Guide;
