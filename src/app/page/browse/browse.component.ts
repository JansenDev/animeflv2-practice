import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  faStar = faStar;
  faCaretDown = faCaretDown;
  faFilter = faFilter;

  genresList: string[] = [];
  showFilter = '';
  isShowFilter = false;

  formBrowser: FormGroup;

  constructor(
    private animeService: AnimeService,
    private formBuilder: FormBuilder
  ) {
    this.formBrowser = this.formBuilder.group({
      genresCheckboxArray: [],
    });
  }

  ngOnInit(): void {
    this.getAllGenres();
  }

  onSubmit() {
    console.log(this.formBrowser.value);
  }

  get genresForm() {
    const selectedOrders: [] = this.formBrowser.value['genresCheckboxArray']
      .map((isGenrerSelected: boolean, index: number) =>
        isGenrerSelected ? this.genresList[index] : null
      )
      .filter((genrer: string) => genrer);

    return selectedOrders;
  }

  get ordersFromArray() {
    return this.formBrowser.controls['genresCheckboxArray'] as FormArray;
  }

  private addCheckboxes(checkboxArray: string[]) {
    checkboxArray.forEach(() => {
      this.ordersFromArray.push(new FormControl(false));
    });
  }

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
      // this.addCheckboxes(genresListResponse);

      // !Test
      this.myTestCallback(genresListResponse);
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

  myTestCallback(data?: string[]) {
    return data;
  }
}
