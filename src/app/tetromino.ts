import { Block } from './block';

export class Tetromino {

  kind: number;
  cx: number;
  cy: number;
  shape: number[][];

  static SHAPES = [[[0, 0], [-1, 0], [1, 0], [2, 0]],
                   [[0, 0], [1, 0], [0, 1], [1, 1]],
                   [[0, 0], [-1, 1], [0, 1], [1, 1]],
                   [[0, 0], [0, 1], [1, 1], [2, 1]],
                   [[0, 0], [0, 1], [-1, 1], [-2, 1]],
                   [[0, 0], [1, 0], [0, 1], [-1, 1]],
                   [[0, 0], [-1, 0], [0, 1], [1, 1]]]

  static EDGE_COLOR = ['darkturquoise', 'gold', 'darkviolet', 'darkblue', 'darkorange', 'darkgreen', 'crimson'];
  static BG_COLOR = ['turquoise', 'yellow', 'violet', 'blue', 'orange', 'green', 'red'];
  // private paints: Paint[] = [];

  constructor(kind: number) {
    this.kind = kind;
    this.cx = 0;
    this.cy = 0;
    // 特定の形の配列をコピーする
    this.shape = Tetromino.SHAPES[kind].slice(0, Tetromino.SHAPES[kind].length);
  }

  put(x: number, y: number, dr: number, board: Block[][]): void {
    this.shape = this.rotateShape(dr);
    this.cx = x;
    this.cy = y;
    for (const block of this.shape) {
      board[y + block[1]][x + block[0]].setColor(Tetromino.EDGE_COLOR[this.kind], Tetromino.BG_COLOR[this.kind]);
    }
  }

  remove(board: Block[][]): void {
    for (const block of this.shape) {
      board[this.cy + block[1]][this.cx + block[0]].resetColor();
    }
  }

  move(dx: number, dy: number, dr: number, board: Block[][]): void {
    const newX = this.cx + dx;
    const newY = this.cy + dy;
    if (this.canPut(this.cx + dx, this.cy + dy, dr, board)) {
      this.remove(board);
      this.put(newX, newY, dr, board);
      this.cx = newX;
      this.cy = newY;
    }
  }

  rotateShape(dr: number): number[][] {
    const shape = this.shape.slice(0, this.shape.length);
    let newShape = [];
    if (dr) {
      for (let [dx, dy] of shape) {
        newShape.push([dy, -dx]);
      }
    } else {
      newShape = shape;
    }
    return newShape;
  }

  canMove(dx: number, dy: number, board: Block[][]): boolean {
    return this.canPut(this.cx, this.cy + 1, 0, board);
  }

  canPut(x: number, y: number, dr: number, board: Block[][]): boolean {

    const newShape = this.rotateShape(dr);

    for (const [dx, dy] of newShape) {
      const newX = x + dx;
      const newY = y + dy;

      // ボードの外には移動できない
      if (newX < 0 || 10 <= newX || newY < 0 || 20 <= newY ) {
        return false;
      }

      // 他のブロックがすでにある場所には移動できない
      const exists = board[newY][newX].exists;
      if (exists) {
        let includes = false;
        for (const selfBlock of newShape) {
          const selfX = this.cx + selfBlock[0];
          const selfY = this.cy + selfBlock[1];
          if (newX === selfX && newY === selfY) {
            includes = true;
          }
        }
        if (!includes) {
          return false;
        }
      }
    }
    return true;
  }
}
