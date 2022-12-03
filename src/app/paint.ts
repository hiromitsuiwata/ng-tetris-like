export class Paint {
  x: number;
  y: number;
  edgeColor: string;
  bgColor: string;

  constructor(x: number, y: number, edgeColor: string, bgColor: string) {
    this.x = x;
    this.y = y;
    this.edgeColor = edgeColor;
    this.bgColor = bgColor;
  }
}
