import { Component, Input, OnInit } from '@angular/core';
import { Anime } from 'src/app/model/anime.model';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  constructor() { }
  @Input()
  anime = {} as Anime

  ngOnInit(): void {
  }

}
