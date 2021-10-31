import TemplateComponent from '../../framework/TemplateComponent';
import { Direction, Side } from '../../types';

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
  }

  init() {
    this.setupDimensions();
    this.adjustForDirection();
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
    this.container.style.transform = `translate(-50%) rotate(${this.degreeMap[Direction.UP]})`;
    this.container.style.left = '50%';
    this.container.style.top = `-${this.rect.height / 2}px`;
  }

  adjustCaretForDown() {
    this.container.style.transform = `translate(-50%)  rotate(${this.degreeMap[Direction.DOWN]})`;
    this.container.style.left = '50%';
    this.container.style.top = `calc(100% - ${this.rect.height / 2}px)`;
  }

  adjustCaretForRight() {
    this.container.style.transform = `translate(0, -50%) rotate(${this.degreeMap[Direction.RIGHT]})`;
    this.container.style.left = `calc(100% - ${this.rect.width / 2}px)`;
    this.container.style.top = '50%';
  }

  adjustCaretForLeft() {
    this.container.style.transform = `translate(0, -50%)  rotate(${this.degreeMap[Direction.LEFT]})`;
    this.container.style.left = `-${this.rect.width / 2}px`;
    this.container.style.top = '50%';
  }

  setDirection(direction: Direction) {
    this.direction = direction;
    this.adjustForDirection();
  }

  moveForTooltipSide(side: Side) {
    switch (side) {
      case Side.BOTTOM:
        return this.setDirection(Direction.UP);
      case Side.TOP:
        return this.setDirection(Direction.DOWN);
      case Side.LEFT:
        return this.setDirection(Direction.RIGHT);
      case Side.RIGHT:
        return this.setDirection(Direction.LEFT);
    }
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
