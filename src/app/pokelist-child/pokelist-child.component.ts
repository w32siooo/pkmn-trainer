import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
type MyArrayType = Array<{ url: string }>;

@Component({
  selector: 'app-pokelist-child',
  templateUrl: './pokelist-child.component.html',
  styleUrls: ['./pokelist-child.component.css'],
})

export class PokelistChildComponent implements OnInit {
  @Input('pokemon') pokeName = ''; // tslint:disable-line: no-input-rename
  @Input('pokemonNumber') pokemonNumber: number[] = [];
  @Input('index') index: number = 0; // tslint:disable-line: no-input-rename
  caught: boolean = false
  @Output() buttonClicked: EventEmitter<number> = new EventEmitter<number>();
  
  public pokeImg: MyArrayType = [
    { url: 'assets/pokemon/1.png' },
    { url: 'assets/pokemon/3.png' },
    { url: 'assets/pokemon/2.png' },
    { url: 'assets/pokemon/4.png' },
    { url: 'assets/pokemon/5.png' },
    { url: 'assets/pokemon/6.png' },
    { url: 'assets/pokemon/7.png' },
    { url: 'assets/sprites/pokemon/8.png' },
    { url: 'assets/sprites/pokemon/9.png' },
    { url: 'assets/sprites/pokemon/10.png' },
    { url: 'assets/sprites/pokemon/11.png' },
    { url: 'assets/sprites/pokemon/12.png' },
    { url: 'assets/sprites/pokemon/13.png' },
    { url: 'assets/sprites/pokemon/14.png' },
    { url: 'assets/sprites/pokemon/15.png' },
    { url: 'assets/sprites/pokemon/16.png' },
    { url: 'assets/sprites/pokemon/17.png' },
    { url: 'assets/sprites/pokemon/18.png' },
    { url: 'assets/sprites/pokemon/19.png' },
    { url: 'assets/sprites/pokemon/20.png' },
    { url: 'assets/sprites/pokemon/21.png' },
    { url: 'assets/sprites/pokemon/22.png' },
    { url: 'assets/sprites/pokemon/23.png' },
    { url: 'assets/sprites/pokemon/24.png' },
    { url: 'assets/sprites/pokemon/25.png' },
    { url: 'assets/sprites/pokemon/26.png' },
    { url: 'assets/sprites/pokemon/28.png' },
    { url: 'assets/sprites/pokemon/29.png' },
    { url: 'assets/sprites/pokemon/30.png' },
    { url: 'assets/sprites/pokemon/31.png' },
    { url: 'assets/sprites/pokemon/32.png' },
    { url: 'assets/sprites/pokemon/33.png' },
    { url: 'assets/sprites/pokemon/34.png' },
    { url: 'assets/sprites/pokemon/35.png' },
    { url: 'assets/sprites/pokemon/36.png' },
    { url: 'assets/sprites/pokemon/37.png' },
    { url: 'assets/sprites/pokemon/38.png' },
    { url: 'assets/sprites/pokemon/39.png' },
    { url: 'assets/sprites/pokemon/40.png' },
    { url: 'assets/sprites/pokemon/41.png' },
    { url: 'assets/sprites/pokemon/42.png' },
    { url: 'assets/sprites/pokemon/43.png' },
    { url: 'assets/sprites/pokemon/44.png' },
    { url: 'assets/sprites/pokemon/45.png' },
    { url: 'assets/sprites/pokemon/46.png' },
  ];
  constructor() {}

  


  clickButton() {
    this.buttonClicked.emit(this.index);
    this.caught=true
  }

  ngOnInit(): void {}
}
