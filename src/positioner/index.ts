import { Side } from '../types';

function getHorizontalCenter(elementRect: DOMRect) {
  return elementRect.left + elementRect.width / 2;
}

function getVerticalCenter(elementRect: DOMRect) {
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

export function getPositionForSide(side: Side, elementRect: DOMRect): { x: number; y: number } {
  switch (side) {
    case Side.BOTTOM:
      return { x: getHorizontalCenter(elementRect), y: elementRect.bottom };
    case Side.TOP:
      return { x: getHorizontalCenter(elementRect), y: elementRect.top };
    case Side.LEFT:
      return { x: elementRect.left, y: getVerticalCenter(elementRect) };
    case Side.RIGHT:
      return { x: elementRect.right, y: getVerticalCenter(elementRect) };
  }
}
