export default function arrive(selector): Promise<HTMLElement> {
  return new Promise((res, rej) => {
    if (typeof selector !== "string") return res(selector);
    const element = <HTMLElement>document.body.querySelector(selector);
    if (element) {
      return res(element);
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches(selector)) {
              res(node);
              observer.disconnect();
            }
          }
        });
      });
    });

    observer.observe(document.body, { subtree: true, childList: true });
  });
}
