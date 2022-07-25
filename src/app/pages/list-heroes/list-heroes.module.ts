import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListHeroesComponent } from './list-heroes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListHeroesResolver } from './list-heroes.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ListHeroesComponent,
        resolve: [ListHeroesResolver],
      },
    ]),
    SharedModule,
  ],
  declarations: [ListHeroesComponent],
  providers: [ListHeroesResolver],
})
export class ListHeroesModule {}
