import Guide from './index';
import { HighlightType, ProgressType, Step, StepType } from './types';

const steps: Step[] = [
  {
    type: StepType.TOOLTIP,
    element: '#element2',
    highlightType: HighlightType.SOFT,
    progressOn: ProgressType.ELEMENT,
    headerText: 'Favorites',
    bodyText: 'Click here to add to favorites',
  },
];
const guide = new Guide(steps);
guide.start();
