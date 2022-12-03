import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {

  @Input()
  x: number;

  @Input()
  y: number;

  @Input()
  edgeColor: string;

  @Input()
  bgColor: string;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.edgeColor = '#c0c0c0';
    this.bgColor = '#dcdcdc';
  }

  getbackgroundColor(): string {
    return this.bgColor;
  }
  getBorder() {
    return `4px ridge ${this.edgeColor}`
  }
  getY(): string {
    return `${this.y * 24 + 20}px`;
  }
  getX(): string {
    return `${this.x * 24 + 60}px`;
  }
}
