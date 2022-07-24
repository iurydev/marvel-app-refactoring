import { Character } from './../../../models/character';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  @Input() character:Character
  constructor() { }

  ngOnInit(): void {
    console.log(this.character);
  }

}
