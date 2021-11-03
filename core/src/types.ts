export type StepType = 'TOOLTIP' | 'MODAL';
export type HighlightType = 'HARD' | 'SOFT' | 'NONE';
export type ProgressType = 'ELEMENT' | 'BUTTON';
export type Side = 'RIGHT' | 'LEFT' | 'TOP' | 'BOTTOM';
export type Direction = 'RIGHT' | 'LEFT' | 'UP' | 'DOWN';

export type TooltipStep = {
  type: StepType;
  highlightType?: HighlightType;
  progressOn?: ProgressType;
  element?: string | Element | null;
  headerText: string;
  bodyText: string;
};

export type Step = TooltipStep;

export type GuideOptions = {
  onNext?: (step: Step) => void;
  onDone?: () => void;
};
