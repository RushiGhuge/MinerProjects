// get the canvas

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let widthOfLine = 1;

//resizing...
canvas.height = 2000;
canvas.width = 2000;

let painting = false;

function startPosition() {
  painting = true;
}
function endPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) {
    return;
  }
  let color = document.getElementById("color").value;
  ctx.lineWidth = widthOfLine;
  ctx.lineCap = "round";
  ctx.strokeStyle = color;
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(e.clientX, e.clientY);
}
document.addEventListener("mousedown", startPosition);
document.addEventListener("mouseup", endPosition);
document.addEventListener("mousemove", draw);

function setTheWidthLine(e) {
  widthOfLine = Number(e.value);
}
