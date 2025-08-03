import Atom from "./atom.js";
import { ArcBehavior, BounceBehavior, SpiralBehavior } from "./behaviour.js";
import Emitter from "./emitter.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
      document.getElementById("canvas")
    );
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    const emitter = new Emitter();

    animate(ctx, canvas, emitter);
  } catch (error) {
    console.error("Failed to initialize canvas:", error);
  }
});

const animate = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  emitter: Emitter,
) => {
  ctx.save();
  ctx.fillStyle = "rgba(245, 245, 220, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();

  emitter.emit(canvas.width - 10, 10, 1, new BounceBehavior(canvas));

  const angle = Math.random() * Math.PI;
  const angleSpeed = Math.random() * 0.02 + 0.01;
  const arcRadius = Math.random() * 50 + 35;
  emitter.emit(
    canvas.width / 2,
    canvas.height / 2,
    1,
    new ArcBehavior(arcRadius, angle, angleSpeed),
  );
  emitter.updateAndDraw(ctx);
  requestAnimationFrame(() => animate(ctx, canvas, emitter));
};
