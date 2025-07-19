import { Behaviour } from "./behaviour";

class Atom {
  originX: number;
  originY: number;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  radius: number;
  color: string;
  behaviour: Behaviour;

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    behaviour: Behaviour,
  ) {
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    this.speedX = 0.5;
    this.speedY = 0.5;
    this.radius = radius;
    this.color = color;
    this.behaviour = behaviour;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  updatePosition() {
    this.x += 0.1;
    this.y += 0.1;
  }

  update() {
    this.behaviour.update(this);
  }
}

export default Atom;
