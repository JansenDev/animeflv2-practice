import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
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

  @Output()
  loaded = new EventEmitter<boolean>();
  // loaded = new BehaviorSubject<boolean>(false);
  // loaded$ = this.loaded.asObservable();

  ngOnInit(): void {
    this.getAnimesReleased();
  }

  getAnimesReleased() {
    return this.animeService.getAnimesReleased().subscribe((animes) => {
      console.log(animes);
      this.animeList = animes;
      this.loaded.emit(true);
      // this.loaded.next(true);

    });
  }
}
