import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListHeroesComponent } from './list-heroes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: ListHeroesComponent }]),
    SharedModule,
  ],
  declarations: [ListHeroesComponent],
})
export class ListHeroesModule {}
