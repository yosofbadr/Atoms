import Atom from "./atom.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
      document.getElementById("canvas")
    );
    const ctx = canvas.getContext("2d")!;

    canvas.width = window.innerWidth * 0.6;
    canvas.height = window.innerHeight * 0.6;

    const atoms: Atom[] = [];
    const atomCount = 250;

    for (let atomIndex = 0; atomIndex < atomCount; atomIndex++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 5 + 1;
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      const atom = new Atom(x, y, radius, color);
      atoms.push(atom);
    }

    atoms.forEach((atom) => atom.draw(ctx));
  } catch (error) {
    console.error("Failed to initialize canvas:", error);
  }
});

