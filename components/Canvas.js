import React, { Component } from 'react'

class Canvas extends Component {
  render() {
    return (
      <div>
        <canvas id="canvas" width="550" height="400" >
        </canvas>
        <p><button onClick={draw}>Load image</button></p>
        <p><button onClick={mark}>Scan</button></p>
      </div>
    )
  }
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
  };
  img.src = 'https://res.cloudinary.com/dwtfxrpnf/image/upload/v1562594243/teslaM3_qebd9j.jpg';
}

function mark() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.rect(20, 20, 400, 150);
  ctx.stroke();
}

export default Canvas;
