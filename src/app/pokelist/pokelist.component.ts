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
    this.dataService.getPokemons();
    this.pokemonNumber = this.dataService.pokemonNumberGetter();
    this.pokemons = this.dataService.pokemonArrayGetter();
  }

  parrentEventHandlerFunction(event: number) {
    this.collected.push(event);
    console.log(this.collected)
    this.storeLocally()
  }

  storeLocally() {
    localStorage.setItem('collected', JSON.stringify(this.collected));
    //let data : string = JSON.parse(<string>localStorage.getItem('collected'));
  }
}
