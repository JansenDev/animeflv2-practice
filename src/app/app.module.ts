import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './components/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AnimeComponent } from './components/anime/anime.component';
import { AsideComponent } from './components/aside/aside.component';
import { AnimesComponent } from './components/animes/animes.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FooterComponent } from './components/footer/footer.component';
import { OutputNamePipe } from './pipe/output-name.pipe';
import { TokenInterceptor } from "./interceptor/token.interceptor";
import { NotFoundComponent } from './page/not-found/not-found.component';
import { VerComponent } from './page/ver/ver.component';
import { UrlSafePipe } from './pipe/url-safe.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent, AnimeComponent, AsideComponent, AnimesComponent, SpinnerComponent, FooterComponent, OutputNamePipe, NotFoundComponent, VerComponent, UrlSafePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
