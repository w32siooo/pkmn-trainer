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

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getPokemons()
    this.pokemonNumber = this.dataService.pokemonNumberGetter()
    this.pokemons = this.dataService.pokemonArrayGetter()
    console.log(this.pokemons)
    }

  parrentEventHandlerFunction(event: number) {
    console.log(event);
  }


}
