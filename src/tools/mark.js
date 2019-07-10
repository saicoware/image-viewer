
function mark() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.rect(20, 20, 400, 150);
  ctx.stroke();
}

export default mark;
