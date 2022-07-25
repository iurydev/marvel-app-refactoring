import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import { CoreInterceptorService } from './core/interceptor/core-interceptor.service';
import { HeaderModule } from './core/header/header.module';
import { ListHeroesModule } from './pages/list-heroes/list-heroes.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // Angular imports
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // App imports
    HomeModule,
    HeaderModule,
    SharedModule,
    ListHeroesModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CoreInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
