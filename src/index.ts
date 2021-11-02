import './css/index.css';
import 'reflect-metadata';
import EventManager from './lib/EventManager';

import { processStep } from './runner/runner';
import { GuideOptions, Step, TooltipStep } from './types';
class Guide {
  steps: Step[] | TooltipStep[];
  currentIndex: number;
  onNext: (step: Step) => void;
  onDone: () => void;

  constructor(steps: Step[], options: GuideOptions = { onNext: () => {}, onDone: () => {} }) {
    this.steps = steps;
    this.currentIndex = 0;
    this.onNext = options.onNext;
    this.onDone = options.onDone;
  }
  start() {
    const currentStep = this.steps[this.currentIndex];
    if (!currentStep) return;
    this.run(currentStep);
  }

  run(step: Step) {
    EventManager.once('nextStep.tooltipBuilder', () => {
      this.next();
    });
    processStep(step);
  }

  skipTo(index: number) {}
  next() {
    this.currentIndex++;
    const currentStep = this.steps[this.currentIndex];
    if (!currentStep) {
      return this.onDone();
    }
    this.onNext(currentStep);
    this.run(currentStep);
  }
  back() {}
  stop() {}
}

export default Guide;
