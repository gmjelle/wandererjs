import TemplateComponent from '../../framework/TemplateComponent';
import { ProgressType, Side, Step } from '../../types';
import { createPopper } from '@popperjs/core';
import EventManager from '../../lib/EventManager';

class Tooltip extends TemplateComponent {
  step: Step;
  caret: HTMLElement;
  rect: DOMRect;
  popperMap: { [key: string]: Side };
  bottomContainer: HTMLElement;
  nextButton: HTMLElement;

  constructor(step: Step) {
    super('gdx-absolute gdx-border gdx-shadow-lg gdx-rounded gdx-bg-white gdx-z-50 gdx-px-5 gdx-py-2', step);
    this.container.id = 'tooltip';
    this.step = step;
    this.popperMap = {
      bottom: 'BOTTOM',
      top: 'TOP',
      left: 'LEFT',
      right: 'RIGHT',
    };
    this.setup();
  }

  setup() {
    this.hideBottomContainer();
    this.addToDOM();
    this.rect = this.container.getBoundingClientRect();
    this.setPosition();

    this.setupProgress();
  }

  setupProgress() {
    switch (this.step.progressOn) {
      case 'ELEMENT':
        return this.setupProgressForElement();

      case 'BUTTON':
        return this.setupProgressForButton();
    }
  }

  setupProgressForButton() {
    this.setupNextButton();
  }

  setupProgressForElement() {
    const target = this.step.element as Element;
    target.addEventListener(
      'click',
      () => {
        EventManager.emit('nextStep.tooltip');
      },
      { once: true },
    );
  }

  setupNextButton() {
    this.showBottomContainer();
    this.nextButton.addEventListener(
      'click',
      () => {
        EventManager.emit('nextStep.tooltip');
      },
      { once: true },
    );
  }

  addToDOM() {
    document.body.appendChild(this.container);
  }

  setPosition() {
    const element = this.step.element as Element;
    const inst = createPopper(element, this.container, {
      modifiers: [
        { name: 'offset', options: { offset: [10, 20] } },
        { name: 'arrow', options: { element: this.caret } },
      ],
    });
  }

  hideBottomContainer() {
    this.bottomContainer.style.display = 'none';
  }

  showBottomContainer() {
    this.bottomContainer.style.display = '';
  }

  setHtml({ headerText, bodyText }: Step) {
    this.html = `
      <div id="arrow" js="caret"></div>
      <div class="gdx-flex gdx-flex-col">
        <div class="gdx-text-2xl">${headerText}</div>
        <div class="">${bodyText}</div>
      </div>
      <div js="bottomContainer" class="gdx-flex gdx-justify-between gdx-mt-2">
        <div></div>
        <div js="nextButton" class="gdx-px-3 gdx-py-1 gdx-bg-blue-500 gdx-text-white gdx-text-xs gdx-rounded gdx-cursor-pointer">Next</div>
      </div>
    `;
  }
}

export default Tooltip;