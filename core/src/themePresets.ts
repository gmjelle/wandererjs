import { Theme } from "./@types";

const LIGHT: Theme = {
  backgroundColor: "#FFF",
  textColor: "#1F2937",
  fontFamily: "sans-serif",
  headerSize: "24px",
  bodySize: "16px",
  nextButtonColor: "#3B82F6",
  nextButtonTextColor: "#FFF",
  border: "1px solid #D1D5DB",
  closeButtonColor: "#1F2937",
};

const DARK: Theme = {
  backgroundColor: "#1F2937",
  textColor: "#FFF",
  fontFamily: "sans-serif",
  headerSize: "24px",
  bodySize: "16px",
  nextButtonColor: "#3B82F6",
  nextButtonTextColor: "#FFF",
  border: "none",
  closeButtonColor: "#FFF",
};

export default {
  LIGHT,
  DARK,
};
