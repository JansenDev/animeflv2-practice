import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  AnimeAPINewsResponse,
  AnimeAPIResponse,
  AnimesAPIResponse,
  GenresAPIResponse,
} from '../model/anime.model';
import {
  BehaviorSubject,
  switchMap,
  catchError,
  throwError,
  of
} from 'rxjs';
import {
  retry,
  map,
  retryWhen,
  tap,
  delay,
  take,
} from 'rxjs/operators';
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

    return (
      this.httpClient
        .get<AnimesAPIResponse>(url)
        // Reintento
        .pipe(
          retryWhen((errors) =>
            errors.pipe(
              switchMap((error) => {
                if (error.status === 504 || error.status === 503 || error.status === 0) {
                  return of(error.status);
                }
                return throwError({
                  message:
                    error.error.message || 'Notification.Core.loginError',
                });
              }),
              take(6  ),
              delay(2000)
            )
          )
        )
        // error
        .pipe(
          catchError((error: HttpErrorResponse) => {
            return throwError(() => new Error(error.message));
          })
        )
        .pipe(map((apiResponse) => apiResponse.data.documents))
    );
  }

  getAnimeById(id: string) {
    const path = `/anime/${id}`;
    const url = environment.API_URI_BASE + path;

    return this.httpClient
      .get<AnimeAPIResponse>(url)
      .pipe(retry(3))
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new Error(error.message));
        })
      )
      .pipe(map((animeAPIResponse) => animeAPIResponse.data));
  }

  getAnimeNews(count = 6, nsfw = true) {
    const path = `/random/anime/${count}/${nsfw}`;
    const url = environment.API_URI_BASE + path;

    return this.httpClient
      .get<AnimeAPINewsResponse>(url)
      .pipe(map((animeNewsAPIResponse) => animeNewsAPIResponse.data));
  }

  getAnimeAllGenres(limit = 40) {
    const path = `/resources/1.0/0`;
    const url = environment.API_URI_BASE + path;
    let count = 0;
    return this.httpClient
      .get<GenresAPIResponse>(url)
      .pipe(map((genresAPIResponse) => genresAPIResponse.data['genres']))
      .pipe(
        switchMap((genresList) => {
          if (limit == 0) {
            return [genresList];
          }

          return [genresList.slice(0, limit)];
        })
      );
  }
}
