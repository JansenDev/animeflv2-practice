import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Anime, animeAPIResponse } from '../model/anime.model';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private httpClient: HttpClient) {}

  getAnimes() {
    const url = 'https://api.aniapi.com/v1/anime';
    const TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwOTYiLCJuYmYiOjE2NDM4NDYzMzIsImV4cCI6MTY0NjQzODMzMiwiaWF0IjoxNjQzODQ2MzMyfQ.qLerlhY9TvmQSCt_YrX3_08FtwqKbeZM3VGcDXfTKeg';

    return this.httpClient
      .get<animeAPIResponse>(url, {
        headers: {
          Authorization: TOKEN,
          'Content-Type': 'application/json',
        },
      })
      .pipe(switchMap((test) => [test.data.documents]));
  }
}
