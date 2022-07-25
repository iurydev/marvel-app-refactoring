import { CharacterService } from './../../services/character.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';

@Component({
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss'],
})
export class ListHeroesComponent implements OnInit {
  heroes: Character[];
  constructor(
    private characterService: CharacterService,
    private router: ActivatedRoute
  ) {
    this.router.data.forEach((resolveData: any) => {
      this.heroes = resolveData[0];
    });
    this.characterService.listCharacters$.subscribe((data) => {
      this.heroes = data;
    });
  }

  ngOnInit(): void {}
}
