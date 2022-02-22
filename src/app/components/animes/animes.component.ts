import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/model/anime.model';
import { AnimeService } from 'src/app/service/anime.service';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss'],
})
export class AnimesComponent implements OnInit {
  constructor(private animeService: AnimeService) {}
  @Input()
  animeList: Anime[] = [] as Anime[];

  ngOnInit(): void {
    this.getAnimesReleased()
  }

  getAnimesReleased() {
    return this.animeService.getAnimesReleased().subscribe((animes) => {
      console.log(animes);
      this.animeList = animes;
    });
  }
}
