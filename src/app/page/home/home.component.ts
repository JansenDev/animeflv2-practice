import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/model/anime.model';
import { AnimeService } from 'src/app/service/anime.service';

const CACHE_KEY = 'CACHE_LOCAL_STORAGE';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ispageLoad: boolean = false;
  animeList: Anime[] = [] as Anime[];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.getAnimesReleased();
  }

  animesLoaded(valor: boolean) {
    this.ispageLoad = valor;
  }

  getAnimesReleased() {
    const cache_storage: [] =
      localStorage[CACHE_KEY]
      ? JSON.parse(localStorage[CACHE_KEY])
      : [];

    if (cache_storage.length > 0) {
      this.animeList = cache_storage;
      this.ispageLoad = true;
    }

    return this.animeService.getAnimesReleased().subscribe({
      next: this.nextAnime.bind(this),

      error: (error) => this.hanlderError(error),

      complete: this.handlerComplete.bind(this),
    });
  }

  // ^METODOS
  nextAnime(animes: Anime[]) {
    console.log(animes);
    // console.log(this);

    this.animeList = animes;

    localStorage[CACHE_KEY] = JSON.stringify(animes);
  }

  hanlderError(error: any) {
    console.table('Error: %s', error.message);
  }

  handlerComplete() {
    this.ispageLoad = true;
  }
}
