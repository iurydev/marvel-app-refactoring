import { RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardDetailComponent } from './card/card-detail/card-detail.component';

@NgModule({
  declarations: [SearchComponent, CardComponent, PaginationComponent, CardDetailComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [CardComponent, PaginationComponent, SearchComponent, CommonModule, FormsModule, RouterModule],
})
export class SharedModule {}
