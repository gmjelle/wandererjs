export function matchBounds(
  fromElement: HTMLElement,
  toElement: HTMLElement,
  padding: number = 0
) {
  const fromRect = fromElement.getBoundingClientRect();

  const { scrollX, scrollY } = window;

  const top = fromRect.top + scrollY - padding / 2;
  const left = fromRect.left + scrollX - padding / 2;
  const width = fromRect.width + padding;
  const height = fromRect.height + padding;

  toElement.style.width = `${width}px`;
  toElement.style.height = `${height}px`;
  toElement.style.top = `${top}px`;
  toElement.style.left = `${left}px`;
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
