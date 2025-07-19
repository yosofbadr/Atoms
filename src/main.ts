document.addEventListener("DOMContentLoaded", () => {
  try {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
      document.getElementById("canvas")
    );
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth * 0.6;
    canvas.height = window.innerHeight * 0.6;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 50;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
  } catch (error) {
    console.error("Failed to initialize canvas:", error);
  }
});
