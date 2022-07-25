import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ]
})
export class HomeModule {

}
