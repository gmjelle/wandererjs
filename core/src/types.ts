export type StepType = "TOOLTIP" | "MODAL";
export type HighlightType = "HARD" | "SOFT" | "NONE";
export type ProgressType = "ELEMENT" | "BUTTON";
export type Side = "RIGHT" | "LEFT" | "TOP" | "BOTTOM";
export type Direction = "RIGHT" | "LEFT" | "UP" | "DOWN";

export type TooltipStep = {
  type: StepType;
  highlightType?: HighlightType;
  progressOn?: ProgressType;
  element?: string | Element | null;
  headerText?: string;
  bodyText: string;
};

export type Step = TooltipStep;

type TextStylingOptions = {
  headerTextColor: string;
  bodyTextColor: string;
};

export type Theme = {
  backgroundColor: string;
  textColor?: string;
  headerTextColor?: string;
  bodyTextColor?: string;
  fontFamily: string;
  headerSize: string;
  bodySize: string;
};

export type GuideOptions = {
  onNext?: (step: Step) => void;
  onDone?: () => void;
};
