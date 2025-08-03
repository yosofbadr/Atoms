import { ArcBehavior, BounceBehavior, SpiralBehavior } from "./behaviour.js";
import Emitter from "./emitter.js";
import Palette from "./palette.js";

document.addEventListener("DOMContentLoaded", () => {
  try {
    const canvas: HTMLCanvasElement = <HTMLCanvasElement>(
      document.getElementById("canvas")
    );
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;

    const palette = new Palette();
    const emitter = new Emitter(palette);

    const paletteSelectorContainer = document.getElementById(
      "palette-selector-container",
    );

    palette.palettes.forEach((p, index) => {
      const paletteDiv = document.createElement("div");
      paletteDiv.classList.add("palette-option");
      paletteDiv.dataset.paletteIndex = index.toString();

      p.forEach((color) => {
        const colorSwatch = document.createElement("div");
        colorSwatch.classList.add("color-swatch");
        colorSwatch.style.backgroundColor = color;
        paletteDiv.appendChild(colorSwatch);
      });

      paletteDiv.addEventListener("click", () => {
        palette.setCurrentPalette(index);
      });

      paletteSelectorContainer?.appendChild(paletteDiv);
    });

    const emitterOptionsContainer = document.getElementById("emitter-options");
    const activeEmitters: { [key: string]: boolean } = {};

    const emitterTypes = [
      {
        name: "Bounce",
        behavior: (canvas: HTMLCanvasElement) => new BounceBehavior(canvas),
      },
      {
        name: "Arc",
        behavior: (arcRadius: number, angle: number, angleSpeed: number) =>
          new ArcBehavior(arcRadius, angle, angleSpeed),
      },
      {
        name: "Spiral",
        behavior: (
          arcRadius: number,
          angle: number,
          angleSpeed: number,
          spiralSpeed: number,
        ) => new SpiralBehavior(arcRadius, angle, angleSpeed, spiralSpeed),
      },
    ];

    emitterTypes.forEach((type) => {
      const emitterDiv = document.createElement("div");
      emitterDiv.classList.add("emitter-option");
      emitterDiv.dataset.emitterName = type.name;
      emitterDiv.textContent = type.name;

      // Default to all emitters active and visually selected
      activeEmitters[type.name] = true;
      emitterDiv.classList.add("selected");

      emitterDiv.addEventListener("click", () => {
        activeEmitters[type.name] = !activeEmitters[type.name];
        emitterDiv.classList.toggle("selected", activeEmitters[type.name]);
      });

      emitterOptionsContainer?.appendChild(emitterDiv);
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

      if (activeEmitters["Bounce"]) {
        emitter.emit(canvas.width - 10, 10, 1, new BounceBehavior(canvas));
      }

      if (activeEmitters["Arc"]) {
        const angle = Math.random() * Math.PI;
        const angleSpeed = Math.random() * 0.02 + 0.01;
        const arcRadius = Math.random() * 50 + 35;
        emitter.emit(
          canvas.width / 2,
          canvas.height / 2,
          1,
          new ArcBehavior(arcRadius, angle, angleSpeed),
        );
      }

      if (activeEmitters["Spiral"]) {
        const angle = Math.random() * Math.PI;
        const angleSpeed = Math.random() * 0.02 + 0.01;
        const arcRadius = Math.random() * 50 + 35;
        const spiralSpeed = Math.random() * 0.1 + 0.05;
        emitter.emit(
          canvas.width / 2,
          canvas.height / 2,
          1,
          new SpiralBehavior(arcRadius, angle, angleSpeed, spiralSpeed),
        );
      }

      emitter.updateAndDraw(ctx);
      requestAnimationFrame(() => animate(ctx, canvas, emitter));
    };

    animate(ctx, canvas, emitter);
  } catch (error) {
    console.error("Failed to initialize canvas:", error);
  }
});
