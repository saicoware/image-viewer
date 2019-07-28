import React, { useState, useEffect } from 'react';

import draw from '../tools/draw';
import markBoxes from '../tools/mark';
import read from '../tools/loadData';


const Canvas = () => {
  const [mark, setMark] = useState(false);

  useEffect(() => {
    if(mark) {
      let images =  read();
      images.forEach(image => {
        markBoxes(image.boxes)
      });
      setMark(false);
    }
  });


  return (
    <div>
      <p><button onClick={draw}>Load image</button></p>
      <p>
        <button onClick={() => { setMark(true) }}>
        Scan
        </button>
      </p>
      <canvas id="canvas" width="3024" height="4032" > </canvas>
    </div>
  )
}

export default Canvas;
