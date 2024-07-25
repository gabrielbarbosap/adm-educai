const canvas = document.getElementById("scratchCanvas");
const ctx = canvas.getContext("2d");
const container = document.querySelector(".container");

canvas.width = container.offsetWidth;
canvas.height = container.offsetHeight;

ctx.fillStyle = "#cccccc"; // Cor da camada raspável
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.globalCompositeOperation = "destination-out";

let isDrawing = false;

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);

canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchend", stopDrawing);

function startDrawing(e) {
  isDrawing = true;
  draw(e);
}

function draw(e) {
  if (!isDrawing) return;
  e.preventDefault();
  const rect = canvas.getBoundingClientRect();
  let x, y;
  if (e.type.includes("touch")) {
    const touch = e.touches[0];
    x = touch.clientX - rect.left;
    y = touch.clientY - rect.top;
  } else {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2, false);
  ctx.fill();
}

function stopDrawing() {
  isDrawing = false;
}
