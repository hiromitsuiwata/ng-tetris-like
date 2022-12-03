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
    console.log(event.key);
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
  tetromino: Tetromino;

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

    this.tetromino = new Tetromino(0);
    this.tetromino.put(4, 0, 0, this.board);
  }
}
