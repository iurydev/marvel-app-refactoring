import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card/card-detail/card-detail.component';



@NgModule({
  declarations: [
    CardComponent,
    SearchComponent,
    PaginationComponent,
    CardDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CardComponent, SearchComponent, PaginationComponent]
})
export class SharedModule { }
