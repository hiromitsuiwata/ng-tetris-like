import { Component, Input, HostListener } from '@angular/core';
import { Block } from '../block';
import { Tetromino } from '../tetromino';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {

  @HostListener('document:keydown',['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    event.preventDefault();
    switch(event.key) {
      case 'ArrowLeft':
        this.tetromino.move(-1, 0, 0, this.board);
        break;
      case 'ArrowRight':
        this.tetromino.move(1, 0, 0, this.board);
        break;
      case 'ArrowUp':
        this.tetromino.move(0, 0, 1, this.board);
        break;
      case 'ArrowDown':
        this.tetromino.move(0, 1, 0, this.board);
        break;
      default:
        break;
    }
  }

  @Input()
  message: string;

  width: number;
  height: number;
  tetromino: Tetromino = new Tetromino(0);
  board: Block[][] = [];
  gameOver: boolean = false;
  score: number;

  constructor() {
    this.message = "";
    this.width = 10;
    this.height = 20;
    this.score = 0;

    for (let y = 0; y < this.height; y++) {
      const row = [];
      for (let x = 0; x < this.width; x++) {
        row.push(new Block(x, y));
      }
      this.board.push(row);
    }


    this.tetromino = new Tetromino(this.getRandomKind());
    this.tetromino.put(4, 0, 0, this.board);
    setInterval(() => {
      if (this.gameOver) {
        this.message = "GAME OVER";
        this.changeToGameOverColor();
        return;
      }

      if (!this.tetromino.canMove(0, 1, this.board)) {
        this.tetromino = new Tetromino(this.getRandomKind());
        // 新しく置けなくなったらゲームオーバー
        if (!this.tetromino.canPut(4, 0, 0, this.board)) {
          this.gameOver = true;
          return;
        }
        // そろっている行をクリアする
        this.clearLine();
        // 新しいブロックを置く
        this.tetromino.put(4, 0, 0, this.board);
      } else {
        // 下に1マス移動する
        this.tetromino.move(0, 1, 0, this.board);
      }
    }, 500);
  }

  private getRandomKind(): number {
    return Math.trunc(Math.random() * 7);
  }

  private changeToGameOverColor(): void {
    for (let row of this.board) {
      for (let block of row) {
        block.gameOverColor();
      }
    }
  }

  /**
   * そろっている行を消す
   */
  private clearLine() {
    for (let y = 0; y < this.height; y++) {
      let removable = true;
      for (let x = 0; x < this.width; x++) {
        if (!this.board[y][x].exists) {
          removable = false;
          break;
        }
      }
      if (removable) {
        for (let j = y; j >= 1; j--) {
          for (let x = 0; x < this.width; x++) {
            this.board[j][x].edgeColor = this.board[j - 1][x].edgeColor;
            this.board[j][x].bgColor = this.board[j - 1][x].bgColor;
            this.board[j][x].exists = this.board[j - 1][x].exists;
          }
        }
        for (let x = 0; x < this.width; x++) {
          this.board[0][x].resetColor();
        }
        this.score += 10;
        y--;
      }
    }
  }
}
