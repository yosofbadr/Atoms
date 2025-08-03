class Palette {
  palettes: string[][];
  currentPaletteIndex: number;

  constructor() {
    this.palettes = [
      ["#FFC3A0", "#FF677D", "#D4A5A5", "#392F5A", "#31A2AC"],
      ["#F4E8C1", "#A0C3D2", "#7B8BAD", "#545E75", "#2E2D4D"],
      ["#FAD0C9", "#C8C8A9", "#83AE9B", "#698474", "#4B4453"],
      ["#E6E6FA", "#D8BFD8", "#DDA0DD", "#DA70D6", "#BA55D3"],
    ];
    this.currentPaletteIndex = 0;
  }

  getCurrentPalette() {
    return this.palettes[this.currentPaletteIndex];
  }

  getRandomColor() {
    const currentPalette = this.getCurrentPalette();
    return currentPalette[Math.floor(Math.random() * currentPalette.length)];
  }
}

export default Palette;
