import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() character: Character
  constructor() { }

  ngOnInit(): void {}
  getCharacterPhoto(){
    return this.character.thumbnail.path + "." + this.character.thumbnail.extension;
  }
}
