import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  collectedPokemon: number[] = [];
  constructor() {}

  ngOnInit(): void {
    let data: number []= JSON.parse(<string>localStorage.getItem('collected'));
    this.collectedPokemon= data;
  }
}
