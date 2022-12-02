import { Component, Input } from '@angular/core';
import { Block } from '../block';
import { Tetromino } from '../tetromino';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  @Input()
  message: string;

  width: number;
  height: number;

  board: Block[][] = [];

  constructor() {
    this.message = "initial message";
    this.width = 10;
    this.height = 20;

    for (let y = 0; y < this.height; y++) {
      const row = [];
      for (let x = 0; x < this.width; x++) {
        row.push(new Block(x, y));
      }
      this.board.push(row);
    }

    this.putTetromino(5, 0, 0);
    this.putTetromino(5, 2, 1);
    this.putTetromino(5, 5, 2);
    this.putTetromino(5, 8, 3);
    this.putTetromino(5, 11, 4);
    this.putTetromino(5, 14, 5);
    this.putTetromino(5, 17, 6);

  }

  private putTetromino(x: number, y: number, kind: number, rotation: number = 0) {
    const shape = Tetromino.SHAPES[kind];
    for (const block of shape) {
      this.setColor(x + block[0], y + block[1], kind);
    }
  }

  private setColor(x: number, y: number, color: number) {
    this.board[y][x].setColor(color);
  }
}
