import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { credentialsRequest, environment } from 'src/environments/environment';

@Injectable()
export class CoreInterceptorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const request_api = request.clone({
      params: (request.params ? request.params : new HttpParams()).appendAll(
        credentialsRequest
      ),
    });

    return next.handle(request_api);
  }
}
