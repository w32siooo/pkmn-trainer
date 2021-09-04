import { Component, OnInit } from '@angular/core';
import { PaginationControlsComponent } from 'ngx-pagination';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css'],
})
export class PokelistComponent implements OnInit {
  pokemons: any[] = [];
  page = 0;
  totalPokemons: number = 0;
  pokemonNumber: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  parrentEventHandlerFunction(event: number) {
    console.log(event);
  }

  getPokemons() {
    this.dataService.getPokemon(5, this.page + 0).subscribe((response: any) => {
      this.totalPokemons = response.count;
      this.pokemons = response.results.map((e: any) => {
        this.pokemonNumber.push(e.url[34]);
        return e.name;
      });
      console.log(this.pokemonNumber);
    });
  }
}
