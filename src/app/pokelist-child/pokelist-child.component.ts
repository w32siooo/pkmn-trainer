import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { pokeImgUrls, pokeImgType } from '../constants/constants';

@Component({
  selector: 'app-pokelist-child',
  templateUrl: './pokelist-child.component.html',
  styleUrls: ['./pokelist-child.component.css'],
})
export class PokelistChildComponent implements OnInit {
  @Input('pokemon') pokeName = ''; // tslint:disable-line: no-input-rename
  @Input('pokemonNumber') pokemonNumber: number[] = [];
  @Input('index') index: number = 0; // tslint:disable-line: no-input-rename
  caught: boolean = false;
  @Output() buttonClicked: EventEmitter<number> = new EventEmitter<number>();

  public pokeImg: pokeImgType = pokeImgUrls;

  constructor() {}

  clickButton() {
    this.buttonClicked.emit(this.index);
    this.caught = true;
  }

  ngOnInit(): void {}
}
