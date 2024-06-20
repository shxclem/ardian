import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `
  <h2 class="center">Ajouter un Pokémon</h2>
  <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  <app-app-footer></app-app-footer>
  `
})
export class AddPokemonComponent implements OnInit {

  pokemon!: Pokemon;
  
  constructor() { }

  ngOnInit() {
    this.pokemon = new Pokemon();
  }

}
