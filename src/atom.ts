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
  lifespan: number;

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    behaviour: Behaviour,
    lifespan: number,
  ) {
    this.x = x;
    this.y = y;
    this.originX = x;
    this.originY = y;
    this.speedX = Math.random() * 0.8;
    this.speedY = Math.random() * 0.8;
    this.radius = radius;
    this.color = color;
    this.behaviour = behaviour;
    this.lifespan = lifespan;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.lifespan;
    ctx.fill();
    ctx.closePath();
    ctx.globalAlpha = 1;
  }

  update() {
    this.behaviour.update(this);
    this.lifespan -= 0.001;
    this.radius -= 0.015;
  }
}

export default Atom;
