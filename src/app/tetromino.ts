export class Tetromino {
  kind: number;
  cx: number;
  cy: number;

  static SHAPES = [[[0, 0], [-1, 0], [1, 0], [2, 0]],
                   [[0, 0], [1, 0], [0, 1], [1, 1]],
                   [[0, 0], [-1, 1], [0, 1], [1, 1]],
                   [[0, 0], [0, 1], [1, 1], [2, 1]],
                   [[0, 0], [0, 1], [-1, 1], [-2, 1]],
                   [[0, 0], [1, 0], [0, 1], [-1, 1]],
                   [[0, 0], [-1, 0], [0, 1], [1, 1]]]

  static EDGE_COLOR = ['darkturquoise', 'gold', 'darkviolet', 'darkblue', 'darkorange', 'darkgreen', 'crimson'];
  static BG_COLOR = ['turquoise', 'yellow', 'violet', 'blue', 'orange', 'green', 'red'];

  constructor() {
    this.kind = 0;
    this.cx = 0;
    this.cy = 0;
  }
}
