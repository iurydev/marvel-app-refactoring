import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(public characterService:CharacterService) { }

  ngOnInit(): void {
  }

  setSearch(){
    this.characterService.getPersonagens(true);
  }

}
