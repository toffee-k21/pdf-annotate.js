import setAttributes from '../utils/setAttributes';

export default function renderLine(a) {
  return a.rectangles.map((r) => {
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    setAttributes(line, {
      x1: r.x,
      y1: r.y,
      x2: r.x + r.width,
      y2: r.y,
      stroke: '#f00',
      strokeWidth: 1
    });

    return line;
  });
}