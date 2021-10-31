import TemplateComponent from '../../framework/TemplateComponent';
import { getOptimalSideForRect, getPositionForSide } from '../../positioner';
import { Side, Step } from '../../types';

class Tooltip extends TemplateComponent {
  step: Step;
  constructor(step: Step) {
    super('gdx-absolute', step);
    this.step = step;
    this.addToDOM();
    this.setPosition();
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
