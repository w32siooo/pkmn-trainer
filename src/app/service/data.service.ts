import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  pokemons: string[] = [];
  page = 0;
  totalPokemons: number = 0;
  pokemonNumber: number[] = [];
  limit = 5;
  offset = 0;
  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http
      .get<any[]>(`https://pokeapi.co/api/v2/pokemon?limit=7&offset=0`)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.map((e: any) => {
          this.pokemonNumber.push(e.url[34]);
          this.pokemons.push(e.name);
        });
      });
  }

  public pokemonArrayGetter(): string[] {
    return this.pokemons;
  }

  public pokemonNumberGetter(): number[] {
    return this.pokemonNumber;
  }

  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
