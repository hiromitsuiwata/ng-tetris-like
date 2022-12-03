export class Block {
  x: number;
  y: number;
  edgeColor: string;
  bgColor: string;
  exists: boolean;

  constructor(x: number, y: number, edgeColor: string = '#888', bgColor: string = '#ccc') {
    this.x = x;
    this.y = y;
    this.edgeColor = edgeColor;
    this.bgColor = bgColor;
    this.exists = false;
  }

  setColor(edgeColor: string, bgColor: string) {
    this.edgeColor = edgeColor;
    this.bgColor = bgColor;
    this.exists = true;
  }

  resetColor() {
    this.edgeColor = '#888';
    this.bgColor = '#ccc';
    this.exists = false;
  }
}
