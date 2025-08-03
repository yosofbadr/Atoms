import Atom from "./atom.js";
import { Behaviour } from "./behaviour";
import Palette from "./palette.js";

export default class Emitter {
  atoms: Atom[];
  palette: Palette;

  constructor(palette: Palette) {
    this.atoms = [];
    this.palette = palette;
  }

  emit(x: number, y: number, count: number, behaviour: Behaviour): void {
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 10 + 1;

      const color = this.palette.getRandomColor();

      const arcAtom = new Atom(
        x,
        y,
        radius,
        color,
        behaviour,
        Math.random() * 1,
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
