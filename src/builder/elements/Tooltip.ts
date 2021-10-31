import TemplateComponent from '../../framework/TemplateComponent';
import { getOptimalSideForRect, getPositionForSide } from '../../positioner';
import { Side, Step } from '../../types';
import Caret from './Caret';

class Tooltip extends TemplateComponent {
  step: Step;
  caret: Caret;
  constructor(step: Step) {
    super('gdx-absolute', step);
    this.step = step;
    this.caret = new Caret();
    this.appendCaret();
    this.addToDOM();
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
    const targetRect = element.getBoundingClientRect();
    const side: Side = getOptimalSideForRect(targetRect);
    const position = getPositionForSide(side, targetRect);
    this.moveToPosition(position);
  }

  moveToPosition(position: { x: number; y: number }) {
    console.log(this.container);
    this.container.style.left = `${position.x}px`;
    this.container.style.top = `${position.y}px`;
  }

  setHtml({ headerText, bodyText }: Step) {
    this.html = `
      <div class="gdx-flex gdx-flex-col  gdx-px-5 gdx-py-2 gdx-shadow-lg gdx-rounded">
        <div class="gdx-text-2xl">${headerText}</div>
        <div class="">${bodyText}</div>
      </div>
    `;
  }
}

export default Tooltip;
