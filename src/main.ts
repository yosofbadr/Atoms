import Atom from "./atom.js";
import { BounceBehavior } from "./behaviour.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
      document.getElementById("canvas")
    );
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

    canvas.width = window.innerWidth * 0.6;
    canvas.height = window.innerHeight * 0.6;

    const atoms: Atom[] = [];
    const atomCount = 250;

    for (let atomIndex = 0; atomIndex < atomCount; atomIndex++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 5 + 1;
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      const atom = new Atom(x, y, radius, color, new BounceBehavior(canvas));
      atoms.push(atom);
    }

    animate(ctx, canvas, atoms);
  } catch (error) {
    console.error("Failed to initialize canvas:", error);
  }
});

const animate = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  atoms: Atom[],
) => {
  ctx.save();
  ctx.fillStyle = "rgba(245, 245, 220, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.restore();

  atoms.forEach((atom) => {
    atom.update();
    atom.draw(ctx);
  });
  requestAnimationFrame(() => animate(ctx, canvas, atoms));
};
