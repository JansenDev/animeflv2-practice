import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
import { Anime } from 'src/app/model/anime.model';

@Component({
  selector: 'app-animes',
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss'],
})
export class AnimesComponent implements OnInit {
  constructor() {}
  @Input()
  animeList: Anime[] = [] as Anime[];

  // @Output()
  // loaded = new EventEmitter<boolean>();
  // loaded = new BehaviorSubject<boolean>(false);
  // loaded$ = this.loaded.asObservable();

  ngOnInit(): void {

  }


}
