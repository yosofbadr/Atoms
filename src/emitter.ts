import Atom from "./atom.js";
import { Behaviour, ArcBehavior } from "./behaviour";

export default class Emitter {
  atoms: Atom[];

  constructor() {
    this.atoms = [];
  }

  emit(x: number, y: number, count: number, behaviour: Behaviour): void {
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 10 + 1;
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

      // const angle = Math.random() * Math.PI * 2;
      // const angleSpeed = Math.random() * 0.02 + 0.01;
      // const arcRadius = Math.random() * 20 + 10;

      const arcAtom = new Atom(
        x,
        y,
        radius,
        color,
        behaviour,
        Math.random() * 100 + 10,
      );

      this.atoms.push(arcAtom);
    }
  }

  updateAndDraw(ctx: CanvasRenderingContext2D): void {
    for (let i = this.atoms.length - 1; i >= 0; i--) {
      const atom = this.atoms[i];
      atom.update();
      if (atom.lifespan <= 0 || atom.radius <= 0) {
        this.atoms.splice(i, 1);
      } else {
        atom.draw(ctx);
      }
    }
  }
}
