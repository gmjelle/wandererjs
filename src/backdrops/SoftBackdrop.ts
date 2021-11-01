import TemplateComponent from '../framework/TemplateComponent';
import { matchBounds } from '../utils';
import { singleton } from 'tsyringe';

@singleton()
class SoftBackdrop extends TemplateComponent {
  gradientElement: HTMLDivElement;
  activeElement: Element;
  constructor() {
    super('gdx-absolute gdx-top-0 gdx-left-0 gdx-w-full gdx-h-full gdx-pointer-events-none gdx-soft-backdrop gdx-z-20');

    this.hide();
    document.body.appendChild(this.container);
  }

  showOnElement(element: Element) {
    matchBounds(<HTMLElement>element, <HTMLElement>this.gradientElement, 25);
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
      <div js="gradientElement" class="gdx-absolute soft-backdrop-shadow"></div>
    `;
  }
}

export default SoftBackdrop;
