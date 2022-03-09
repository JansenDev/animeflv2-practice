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
    let cache_storage: [] = localStorage[CACHE_KEY]
      ? JSON.parse(localStorage[CACHE_KEY])
      : [];

    if (cache_storage.length > 0) {
      this.animeList = cache_storage;
      this.ispageLoad = true;
    }

    return this.animeService.getAnimesReleased().subscribe((animes) => {
      console.log(animes);
      this.animeList = animes;
      this.ispageLoad = true;
      localStorage[CACHE_KEY] = JSON.stringify(animes);
    });
  }
}
