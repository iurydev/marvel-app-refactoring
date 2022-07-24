import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeroesComponent } from './list-heroes/list-heroes.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListHeroesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ListHeroesComponent]
})
export class PagesModule { }
