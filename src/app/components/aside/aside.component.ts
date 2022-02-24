import { Component, OnInit } from '@angular/core';
import { faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Anime } from 'src/app/model/anime.model';
import { AnimeService } from '../../service/anime.service';
import { Format } from '../../model/enum/format';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.getAnimesReleased();
  }
  faPlayCircle = faPlayCircle;
  faPlay = faPlay;

  animeList: Anime[] = [] as Anime[];
  format: any = Format;

  getAnimesReleased() {
    this.animeService.getAnimesReleased().subscribe((animesArray) => {
      this.animeList = animesArray;
    });
  }
}
