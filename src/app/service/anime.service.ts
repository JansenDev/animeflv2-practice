import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AnimeAPINewsResponse,
  AnimeApiResponse,
  AnimesAPIResponse,
} from '../model/anime.model';
import { BehaviorSubject, switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private httpClient: HttpClient) {}

  getAnimesReleased() {
    const path = `/anime?status=1&year=2022`;
    const url = environment.API_URI_BASE + path;
    // ('https://api.aniapi.com/v1/anime?status=1&year=2022');

    return this.httpClient
      .get<AnimesAPIResponse>(url)
      .pipe(map((apiResponse) => apiResponse.data.documents));
  }

  getAnimeById(id: string) {
    const path = `/anime/${id}`;
    const url = environment.API_URI_BASE + path;

    return this.httpClient
      .get<AnimeApiResponse>(url)
      .pipe(map((apiResponse) => apiResponse.data));
  }

  getAnimeNews(count = 6, nsfw = true) {
    const path = `/random/anime/${count}/${nsfw}`;
    const url = environment.API_URI_BASE + path;

    return this.httpClient
      .get<AnimeAPINewsResponse>(url)
      .pipe(map((animeNewsList) => animeNewsList.data));
  }
}
