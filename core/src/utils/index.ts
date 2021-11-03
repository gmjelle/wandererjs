export function matchBounds(fromElement: HTMLElement, toElement: HTMLElement, padding: number = 0) {
  const fromRect = fromElement.getBoundingClientRect();
  const toRect = toElement.getBoundingClientRect();

  const top = fromRect.top - toRect.top - padding / 2;
  const left = fromRect.left - toRect.left - padding / 2;

  toElement.style.width = `${fromRect.width + padding}px`;
  toElement.style.height = `${fromRect.height + padding}px`;
  toElement.style.top = `${top}px`;
  toElement.style.left = `${left}px`;
}

export function isElementInViewport(element: Element) {
  const rect = element.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
