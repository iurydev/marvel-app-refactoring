import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  constructor(public characterService:CharacterService) { }

  ngOnInit(): void {
  }

  setSearch(){
    this.characterService.filterHeroes(true);
  }

}
