import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/model/anime.model';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
})
export class AnimeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input()
  anime = {} as Anime;
  faPlayCircle = faPlayCircle;
}
