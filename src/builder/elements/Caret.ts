import TemplateComponent from '../../framework/TemplateComponent';
import { Direction } from '../../types';

class Caret extends TemplateComponent {
  direction: Direction;
  dimensions: number;
  degreeMap: { [key: string]: string };
  rect: DOMRect;
  constructor() {
    super('gdx-absolute gdx-bg-white gdx-border-l gdx-border-t gdx-box-content gdx-rotate-center gdx-z-10');
    this.direction = Direction.DOWN;
    this.dimensions = 20;
    this.degreeMap = {
      [Direction.UP]: '45deg',
      [Direction.DOWN]: '225deg',
      [Direction.RIGHT]: '135deg',
      [Direction.LEFT]: '315deg',
    };

    // We wait for the next tick so that it will already be appended to the DOM
    queueMicrotask(() => {
      this.setupDimensions();
      this.adjustForDirection();
    });
  }

  adjustForDirection() {
    switch (this.direction) {
      case Direction.DOWN:
        return this.adjustCaretForDown();

      case Direction.UP:
        return this.adjustCaretForUp();

      case Direction.RIGHT:
        return this.adjustCaretForRight();

      case Direction.LEFT:
        return this.adjustCaretForLeft();
    }
  }

  adjustCaretForUp() {
    this.container.style.transform = `rotate(${this.degreeMap[Direction.UP]})`;
  }

  adjustCaretForRight() {
    this.container.style.transform = `rotate(${this.degreeMap[Direction.RIGHT]})`;
  }

  adjustCaretForLeft() {
    this.container.style.transform = `rotate(${this.degreeMap[Direction.LEFT]})`;
  }

  adjustCaretForDown() {
    this.container.style.transform = `rotate(${this.degreeMap[Direction.DOWN]})`;
    this.container.style.bottom = `-${this.rect.height / 2}px`;
  }

  setupDimensions() {
    this.container.style.width = `${this.dimensions}px`;
    this.container.style.height = `${this.dimensions}px`;
    this.rect = this.container.getBoundingClientRect();
  }

  changeDirection(newDirection: Direction) {}

  setHtml() {
    this.html = ``;
  }
}

export default Caret;
