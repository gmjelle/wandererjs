import { Side } from '../types';

const SPACER: number = 15;

function getHorizontalCenter(elementRect: DOMRect): number {
  return elementRect.left + elementRect.width / 2;
}

function getVerticalCenter(elementRect: DOMRect): number {
  return elementRect.bottom + elementRect.height / 2;
}

export function getOptimalSideForRect(elementRect: DOMRect): Side {
  const spaceMap = {
    [Side.LEFT]: elementRect.x,
    [Side.TOP]: elementRect.y,
    [Side.RIGHT]: window.innerWidth - elementRect.right,
    [Side.BOTTOM]: window.innerHeight - elementRect.bottom,
  };

  const max = {
    side: Side.LEFT,
    space: spaceMap[Side.LEFT],
  };

  Object.entries(spaceMap).forEach(([key, value]: [Side, number]) => {
    if (value > max.space) {
      max.side = key;
      max.space = value;
    }
  });

  return max.side;
}

export function getPositionForSide(side: Side, elementRect: DOMRect, tooltipRect: DOMRect): { x: number; y: number } {
  console.log({ side, elementRect, tooltipRect });
  switch (side) {
    case Side.BOTTOM:
      return { x: getHorizontalCenter(elementRect) - tooltipRect.width / 2, y: elementRect.bottom + SPACER };
    case Side.TOP:
      return { x: getHorizontalCenter(elementRect) - tooltipRect.width / 2, y: elementRect.top + SPACER };
    case Side.LEFT:
      return { x: elementRect.left + SPACER, y: getVerticalCenter(elementRect) - tooltipRect.height / 2 };
    case Side.RIGHT:
      return { x: elementRect.right + SPACER, y: getVerticalCenter(elementRect) - tooltipRect.height / 2 };
  }
}
