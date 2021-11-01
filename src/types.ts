export enum StepType {
  TOOLTIP = 'TOOLTIP',
  MODAL = 'MODAL',
}

export enum HighlightType {
  HARD = 'HARD',
  SOFT = 'SOFT',
  NONE = 'NONE',
}

export enum ProgressType {
  ELEMENT = 'ELEMENT',
  BUTTON = 'BUTTON',
}

export enum Side {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}

export enum Direction {
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
  UP = 'UP',
  DOWN = 'DOWN',
}

export type Step = {
  type: StepType;
  highlightType?: HighlightType;
  progressOn?: ProgressType;
  element?: string | Element | null;
  headerText?: string;
  bodyText?: string;
};

export type TooltipStep = Step & {
  headerText: string;
  bodyText: string;
};

export type GuideOptions = {
  onNext?: (step: Step) => void;
  onDone?: () => void;
};
