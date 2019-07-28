
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  };
  img.src = 'https://res.cloudinary.com/dwtfxrpnf/image/upload/v1563736464/image00_woohkx.jpg';

}

export default draw;

