import { Component, Input, OnInit } from '@angular/core';
import { faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Anime } from 'src/app/model/anime.model';
import { Format } from '../../model/enum/format';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  faPlayCircle = faPlayCircle;
  faPlay = faPlay;

  @Input()
  animeList: Anime[] = [] as Anime[];
  format: any = Format;
}
