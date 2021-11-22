import { Block } from "./blocks";

export type StepType = "TOOLTIP" | "MODAL" | "CUSTOM";
export type HighlightType = "HARD" | "SOFT" | "NONE";
export type ProgressType = "ELEMENT" | "BUTTON";
export type Side = "RIGHT" | "LEFT" | "TOP" | "BOTTOM";
export type Direction = "RIGHT" | "LEFT" | "UP" | "DOWN";

export type TooltipStep = {
  type: "TOOLTIP";
  element: string | Element | null;
  highlightType?: HighlightType;
  progressOn?: ProgressType;
  headerText?: string;
  bodyText?: string;
  showArrow?: boolean;
};

export type CustomStep = {
  type: "CUSTOM";
  blocks: Block[];
};

export type Step = TooltipStep | CustomStep;

export type Theme = "WANDERER_LIGHT" | "WANDERER_DARK";

export type Options = {
  showCloseButton: boolean;
};

export type TripOptions = {
  onNext?: (step: Step) => void;
  onDone?: () => void;
  multiPage: boolean;
};
