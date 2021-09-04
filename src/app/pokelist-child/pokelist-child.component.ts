import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokelist-child',
  templateUrl: './pokelist-child.component.html',
  styleUrls: ['./pokelist-child.component.css'],
})
export class PokelistChildComponent implements OnInit {
  @Input('pokemon') pokeName = ''; // tslint:disable-line: no-input-rename
  @Input('pokemonNumber') pokemonNumber: number[] = [];
  @Input('index') index: number = 0; // tslint:disable-line: no-input-rename
  @Output() buttonClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  clickButton() {
    this.buttonClicked.emit(this.index);
  }

  ngOnInit(): void {}
}
