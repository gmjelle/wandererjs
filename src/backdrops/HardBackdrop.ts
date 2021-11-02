import { singleton } from 'tsyringe';
import TemplateComponent from '../framework/TemplateComponent';
import { matchBounds } from '../utils';

@singleton()
class HardBackdrop extends TemplateComponent {
  gradientElement: HTMLDivElement;
  activeElement: Element;
  constructor() {
    super('gdx-absolute gdx-top-0 gdx-left-0 gdx-w-full gdx-h-full gdx-pointer-events-none hard-backdrop gdx-z-20');

    this.hide();
    document.body.appendChild(this.container);
  }

  showOnElement(element: Element) {
    queueMicrotask(() => {
      matchBounds(element as HTMLElement, this.gradientElement as HTMLElement, 0);
    });
  }

  show(element: Element) {
    this.activeElement = element;
    this.showOnElement(element);
    super.show();
  }

  hide() {
    this.activeElement = null;
    super.hide();
  }

  setHtml() {
    this.html = `
      <div js="gradientElement" class="gdx-absolute hard-backdrop-shadow"></div>
    `;
  }
}

export default HardBackdrop;
