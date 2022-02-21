import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/model/anime.model';
import { AnimeService } from 'src/app/service/anime.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private animeService: AnimeService) {}

  animeList: Anime[] = [];

  ngOnInit(): void {
    console.log('hellow');

    this.test();
  }

  test() {
    return this.animeService.getAnimes().subscribe((animes) => {
      console.log(animes);
      this.animeList = animes;
    });
  }
}
