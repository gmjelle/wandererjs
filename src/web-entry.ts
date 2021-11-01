import Guide from './index';
import { HighlightType, ProgressType, Step, StepType } from './types';

const steps: Step[] = [
  {
    type: StepType.TOOLTIP,
    element: '#element',
    highlightType: HighlightType.HARD,
    progressOn: ProgressType.ELEMENT,
    headerText: 'Favorites',
    bodyText: 'Click here to add to favorites',
  },
  {
    type: StepType.TOOLTIP,
    element: '#element2',
    highlightType: HighlightType.SOFT,
    progressOn: ProgressType.ELEMENT,
    headerText: 'Favorites',
    bodyText: 'Click here to add to favorites',
  },
];

const options = {
  onNext(step: Step) {
    console.log('next: ', step);
  },
  onDone() {
    console.log('done');
  },
};

const guide = new Guide(steps, options);
guide.start();
