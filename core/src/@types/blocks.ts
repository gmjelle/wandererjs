export type HeadingSize = "H1" | "H2" | "H3" | "H4" | "H5" | "H6";
export type Align = "LEFT" | "RIGHT" | "CENTER";

export type HeadingBlock = {
  type: "HEADING";
  size: HeadingSize;
  align?: Align;
  text: string;
};

export type TextBlock = {
  type: "TEXT";
  size: string;
  align?: Align;
  text: string;
};

export type Block = HeadingBlock | TextBlock;
