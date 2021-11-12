import { isElementInViewport } from "./utils";

export default function scrollToElementIfNecessary(element) {
  const isVisible = isElementInViewport(element);
  if (isVisible) return;
  element.scrollIntoView(true);
}
