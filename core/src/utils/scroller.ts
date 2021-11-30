import { isElementInViewport } from "./utils";

export default function scrollToElementIfNecessary(element: Element) {
  const isVisible = isElementInViewport(element);
  if (isVisible) return;
  element.scrollIntoView({ behavior: "smooth", block: "center" });
}
