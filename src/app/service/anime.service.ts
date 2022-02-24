import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimeAPIResponse } from '../model/anime.model';
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
      .get<AnimeAPIResponse>(url)
      .pipe(map((apiResponse) => apiResponse.data.documents));
  }
}
