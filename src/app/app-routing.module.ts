import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Implementando lazy-loading. O App fica estruturado para um crescimento
  // futuro com multiplos módulos
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./pages/list-heroes/list-heroes.module').then(
        (m) => m.ListHeroesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
