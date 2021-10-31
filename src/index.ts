import './css/index.css';
import 'reflect-metadata';
import EventManager from './lib/EventManager';

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
    this.run(currentStep);
  }

  run(step: Step) {
    EventManager.once('next-step', () => {
      this.next();
    });
    processStep(step);
  }

  skipTo(index: number) {}
  next() {
    this.currentIndex++;
    const currentStep = this.steps[this.currentIndex];
    if (!currentStep) {
      return console.log('DONE');
    }
    this.run(currentStep);
  }
  back() {}
  stop() {}
}

export default Guide;
