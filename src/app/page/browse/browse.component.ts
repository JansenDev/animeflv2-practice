import { Component, OnInit } from '@angular/core';
import {
  faStar,
  faCaretDown,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import { AnimeService } from 'src/app/service/anime.service';

const CACHE_KEY = 'CACHE_GENRES';
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.getAllGenres();
  }

  faStar = faStar;
  faCaretDown = faCaretDown;
  faFilter = faFilter;

  genresList: string[] = [];
  showFilter = '';
  isShowFilter = false;

  getAllGenres() {
    const cache_storage: [] = localStorage[CACHE_KEY]
      ? JSON.parse(localStorage[CACHE_KEY])
      : [];

    if (cache_storage.length > 0) {
      this.genresList = cache_storage;
    }

    this.animeService.getAnimeAllGenres(40).subscribe((genresListResponse) => {
      this.genresList = genresListResponse;
      localStorage[CACHE_KEY] = JSON.stringify(genresListResponse);
    });
  }

  showFilterPopUp(type: string) {
    console.log(type);
    if (!this.isShowFilter) {
      this.showFilter = type;
      this.isShowFilter = true;
    } else {
      this.showFilter = '';
      this.isShowFilter = false;
    }
  }
}
