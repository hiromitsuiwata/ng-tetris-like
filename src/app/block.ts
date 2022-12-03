export class Block {
  x: number;
  y: number;
  edgeColor: string;
  bgColor: string;
  exists: boolean;

  constructor(x: number, y: number, edgeColor: string = '#c0c0c0', bgColor: string = '#dcdcdc') {
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
    this.edgeColor = '#c0c0c0';
    this.bgColor = '#dcdcdc';
    this.exists = false;
  }

  gameOverColor() {
    if (this.exists) {
      this.edgeColor = "dimgray";
      this.bgColor = "gray";
    }
  }
}
