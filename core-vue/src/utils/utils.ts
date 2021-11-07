export function matchBounds(
  fromElement: HTMLElement,
  toElement: HTMLElement,
  padding: number = 0
) {
  const fromRect = fromElement.getBoundingClientRect();

  const scrollY = window.scrollY;
  const scrollX = window.scrollX;

  toElement.style.width = `${fromRect.width + padding}px`;
  toElement.style.height = `${fromRect.height + padding}px`;
  toElement.style.top = `${fromRect.top + scrollY + padding}px`;
  toElement.style.left = `${fromRect.left + scrollX + padding}px`;
}

export function isElementInViewport(element: Element) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
