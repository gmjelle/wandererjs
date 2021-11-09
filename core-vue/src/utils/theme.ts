import { Theme } from "../types";

export function parseTheme(theme: Theme): Theme {
  if (theme.textColor) {
    if (!theme.headerTextColor) theme.headerTextColor = theme.textColor;
    if (!theme.bodyTextColor) theme.bodyTextColor = theme.textColor;
  }

  return theme;
}
