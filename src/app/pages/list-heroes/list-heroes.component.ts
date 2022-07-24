import { CharacterService } from './../../services/character.service';
import { Observable } from 'rxjs';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements OnInit {
  list: any = [];
  constructor(private characterService: CharacterService) {
    this.characterService.listCharacters$.subscribe(data => this.list = data);
  }

  ngOnInit(): void {
    this.characterService.getPersonagens(true);
  }
}
