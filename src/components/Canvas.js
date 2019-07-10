import React, { Component } from 'react'

import draw from '../tools/draw'
import mark from '../tools/mark'


const Canvas = () => {
  return (
    <div>
      <canvas id="canvas" width="550" height="400" >
      </canvas>
      <p><button onClick={draw}>Load image</button></p>
      <p><button onClick={mark}>Scan</button></p>
    </div>
  )
}

export default Canvas;
