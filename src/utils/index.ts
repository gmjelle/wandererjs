export function matchBounds(fromElement: HTMLElement, toElement: HTMLElement, padding: number = 0) {
  const rect = fromElement.getBoundingClientRect();

  toElement.style.width = `${rect.width + padding}px`;
  toElement.style.height = `${rect.height + padding}px`;
  toElement.style.top = `${rect.top - padding / 2}px`;
  toElement.style.left = `${rect.left - padding / 2}px`;
}
