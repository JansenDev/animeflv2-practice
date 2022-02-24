import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { animeAPIResponse } from '../model/anime.model';
import { BehaviorSubject, switchMap } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  constructor(private httpClient: HttpClient) {}

  getAnimesReleased() {
    const url = 'https://api.aniapi.com/v1/anime?status=1&year=2022';
    const TOKEN =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwOTYiLCJuYmYiOjE2NDM4NDYzMzIsImV4cCI6MTY0NjQzODMzMiwiaWF0IjoxNjQzODQ2MzMyfQ.qLerlhY9TvmQSCt_YrX3_08FtwqKbeZM3VGcDXfTKeg';

    return this.httpClient
      .get<animeAPIResponse>(url, {
        headers: {
          Authorization: TOKEN,
          'Content-Type': 'application/json',
        },
      })
      .pipe(map((apiResponse) => apiResponse.data.documents));
  }
}
