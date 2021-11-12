export type StepType = "TOOLTIP" | "MODAL";
export type HighlightType = "HARD" | "SOFT" | "NONE";
export type ProgressType = "ELEMENT" | "BUTTON";
export type Side = "RIGHT" | "LEFT" | "TOP" | "BOTTOM";
export type Direction = "RIGHT" | "LEFT" | "UP" | "DOWN";

export type TooltipStep = {
  type?: StepType;
  highlightType?: HighlightType;
  progressOn?: ProgressType;
  element: string | Element | null;
  headerText?: string;
  bodyText?: string;
};

export type Step = TooltipStep;

export type ThemePreset = "LIGHT" | "DARK";

export type Theme = {
  preset?: ThemePreset;
  backgroundColor: string;
  textColor?: string;
  headerTextColor?: string;
  bodyTextColor?: string;
  fontFamily: string;
  headerSize: string;
  bodySize: string;
  buttonColor?: string;
  buttonTextColor?: string;
  border?: string;
};

export type Options = {
  showCloseButton: boolean;
};

export type TripOptions = {
  onNext?: (step: Step) => void;
  onDone?: () => void;
  multiPage: boolean;
};
