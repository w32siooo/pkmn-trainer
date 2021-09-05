import { Component, OnInit } from '@angular/core';
import { pokeImgUrls, pokeImgType } from '../constants/constants';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  public pokeImg: pokeImgType = pokeImgUrls;
  collectedPokemon: number[] = [];
  constructor() {}

  ngOnInit(): void {
    let data: number[] = JSON.parse(<string>localStorage.getItem('collected'));
    this.collectedPokemon = data;
  }
}
