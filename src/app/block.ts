export class Block {
  x: number;
  y: number;
  edgeColor: string;
  bgColor: string;

  EDGE_COLOR = ['darkturquoise', 'gold', 'darkviolet', 'darkblue', 'darkorange', 'darkgreen', 'crimson'];
  BG_COLOR = ['turquoise', 'yellow', 'violet', 'blue', 'orange', 'green', 'red'];

  constructor(x: number, y: number, edgeColor: string = '#888', bgColor: string = '#ccc') {
    this.x = x;
    this.y = y;
    this.edgeColor = edgeColor;
    this.bgColor = bgColor;
  }

  setColor(color: number) {
    this.edgeColor = this.EDGE_COLOR[color];
    this.bgColor = this.BG_COLOR[color];
  }
}
