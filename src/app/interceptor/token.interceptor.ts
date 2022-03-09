import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = this.addAuthorization(request);

    return next.handle(request);
  }

  private addAuthorization(request: HttpRequest<unknown>) {
    // TODO:localstorage token
    const token =
      environment.TOKEN ||
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwOTYiLCJuYmYiOjE2NDM4NDYzMzIsImV4cCI6MTY0NjQzODMzMiwiaWF0IjoxNjQzODQ2MzMyfQ.qLerlhY9TvmQSCt_YrX3_08FtwqKbeZM3VGcDXfTKeg';

    if (token) {
      const auth = request.clone({
        headers: request.headers
          .set('Authorization', `Bearer ${token}`)
          .set('Content-Type', 'application/json'),
      });
      return auth;
    }
    return request;
  }
}
