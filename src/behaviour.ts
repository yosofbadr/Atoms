import Atom from "./atom.js";

export class Behaviour {
  update(atom: Atom) {}
}

export class BounceBehavior extends Behaviour {
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
  }

  update(atom: Atom) {
    atom.x += atom.speedX;
    atom.y += atom.speedY;

    if (atom.x < atom.radius || atom.x > this.canvas.width - atom.radius) {
      atom.speedX *= -1;
    }

    if (atom.y < atom.radius || atom.y > this.canvas.height - atom.radius) {
      atom.speedY *= -1;
    }
  }
}
