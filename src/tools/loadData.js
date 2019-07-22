const data = require('../../data/yolo3.json');

let read = () => {
  const labels = data.labels;
  let images = [];
  for (let key in data.images) {
    let image = data.images[key];
    let newBoxes = filterBoxes(image.boxes);
    newBoxes = formatBoxes(newBoxes, labels);
    images.push({image:key, boxes: newBoxes});
  }

  return images;
}

function filterBoxes(boxes) {
  return boxes.filter((box) => {
    return (box.score > 0);
  });
}

function formatBoxes(boxes, labels) {
  return boxes.map((box) => {
    return {
      label: labels[box.label],
      score: box.score,
      x: box.xmin,
      y: box.ymin,
      width: (box.xmax - box.xmin),
      height: (box.ymax - box.ymin),
      xmin: box.xmin,
      ymin: box.ymin,
      xmax: box.xmax,
      ymax: box.ymax
    }
  });
}


export default read;

