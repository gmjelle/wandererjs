import { Align, Block } from "./blocks";

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

export type ModalStep = {
  type: "MODAL";
  align: Align;
  imageSource?: string;
  headerText?: string;
  bodyText?: string;
};

export type CustomStep = {
  type: "CUSTOM";
  blocks: Block[];
};

export type Step = TooltipStep | CustomStep | ModalStep;

export type Theme = "WANDERER_LIGHT" | "WANDERER_DARK" | "WANDERER_BLUE";
