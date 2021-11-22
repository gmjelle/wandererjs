import { Block } from "./blocks";

export type StepType = "TOOLTIP" | "MODAL" | "CUSTOM";
export type HighlightType = "HARD" | "SOFT" | "NONE";
export type ProgressType = "ELEMENT" | "BUTTON";
export type Side = "RIGHT" | "LEFT" | "TOP" | "BOTTOM";
export type Direction = "RIGHT" | "LEFT" | "UP" | "DOWN";

export type TooltipStep = {
  type: "TOOLTIP";
  highlightType?: HighlightType;
  progressOn?: ProgressType;
  element: string | Element | null;
  headerText?: string;
  bodyText?: string;
};

export type CustomStep = {
  type: "CUSTOM";
  showArrow?: boolean;
  highlightType?: HighlightType;
  blocks: Block[];
  element?: string | Element;
};

export type Step = TooltipStep | CustomStep;

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
  nextButtonColor?: string;
  nextButtonTextColor?: string;
  border?: string;
  closeButtonColor?: string;
};

export type Options = {
  showCloseButton: boolean;
};

export type TripOptions = {
  onNext?: (step: Step) => void;
  onDone?: () => void;
  multiPage: boolean;
};
