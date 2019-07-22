
const colors = {
  truck: 'blue',
  car: 'green'
}

function mark({ x, y, width, height, label }) {
  let c = document.getElementById('canvas');
  let ctx = c.getContext('2d');

  ctx.beginPath();
  ctx.lineWidth = '6';
  ctx.strokeStyle = colors[label];
  ctx.font = "50px monospace";
  ctx.strokeText(label, x, y);
  ctx.rect(x, y, width, height);
  ctx.stroke();
}

function markBoxes(boxes) {
  boxes.forEach(box => {
    mark(box);
  });
}

export default markBoxes;
