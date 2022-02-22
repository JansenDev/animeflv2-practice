import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './components/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { AnimeComponent } from './components/anime/anime.component';
import { AsideComponent } from './components/aside/aside.component';
import { AnimesComponent } from './components/animes/animes.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, AnimeComponent, AsideComponent, AnimesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
