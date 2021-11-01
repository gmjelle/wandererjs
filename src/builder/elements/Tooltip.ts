import TemplateComponent from '../../framework/TemplateComponent';
import { Side, Step } from '../../types';
import Caret from './Caret';
import { createPopper } from '@popperjs/core';

class Tooltip extends TemplateComponent {
  step: Step;
  caret: Caret;
  rect: DOMRect;
  popperMap: { [key: string]: Side };

  constructor(step: Step) {
    super('gdx-absolute gdx-border gdx-shadow-lg gdx-rounded gdx-bg-white gdx-z-50 gdx-px-5 gdx-py-2', step);
    this.container.id = 'tooltip';
    this.step = step;
    this.popperMap = {
      bottom: Side.BOTTOM,
      top: Side.TOP,
      left: Side.LEFT,
      right: Side.RIGHT,
    };
    this.setup();
  }

  setup() {
    // this.caret = new Caret(<Element>this.step.element);
    // this.appendCaret();
    this.addToDOM();
    this.rect = this.container.getBoundingClientRect();
    // this.caret.init();
    this.setPosition();
  }

  appendCaret() {
    this.container.appendChild(this.caret.container);
  }

  addToDOM() {
    document.body.appendChild(this.container);
  }

  setPosition() {
    const element = <Element>this.step.element;
    const inst = createPopper(element, this.container, {
      modifiers: [
        { name: 'offset', options: { offset: [10, 20] } },
        { name: 'arrow', options: { element: this.caret } },
      ],
    });
  }

  moveToPosition(position: { x: number; y: number }) {
    this.container.style.left = `${position.x}px`;
    this.container.style.top = `${position.y}px`;
  }

  setHtml({ headerText, bodyText }: Step) {
    this.html = `
      <div id="arrow" js="caret"></div>
      <div class="gdx-flex gdx-flex-col">
        <div class="gdx-text-2xl">${headerText}</div>
        <div class="">${bodyText}</div>
      </div>
    `;
  }
}

export default Tooltip;
