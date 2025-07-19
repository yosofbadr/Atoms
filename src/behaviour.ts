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

export class ArcBehavior extends Behaviour {
  arcRadius: number;
  angle: number;
  angleSpeed: number;

  constructor(arcRadius: number, angle: number, angleSpeed: number) {
    super();
    this.arcRadius = arcRadius;
    this.angle = angle;
    this.angleSpeed = angleSpeed;
  }

  update(atom: Atom) {
    this.angle += this.angleSpeed;
    atom.x = atom.originX + Math.cos(this.angle) * this.arcRadius;
    atom.y = atom.originY + Math.sin(this.angle) * this.arcRadius;
  }
}
