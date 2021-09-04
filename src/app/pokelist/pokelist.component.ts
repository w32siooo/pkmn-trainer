import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css'],
})
export class PokelistComponent implements OnInit {
  pokemons: string[] = [];
  pokemonNumber: number[] = [];
  collected: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.pokemonNumber = this.dataService.pokemonNumberGetter();
    this.pokemons = this.dataService.pokemonArrayGetter();
  }

  parrentEventHandlerFunction(event: number) {
    this.collected.push(event);
  }
  ngOnDestroy() {
    this.storeLocally();
  }

  storeLocally() {
    let data: number[] = JSON.parse(<string>localStorage.getItem('collected'));
    //if data is not null or undefined we will store previous data in local storage.
    if (data) {
      localStorage.setItem(
        'collected',
        JSON.stringify([...data, ...this.collected])
      );
    } else {
      localStorage.setItem('collected', JSON.stringify([...this.collected]));
    }
  }
}
