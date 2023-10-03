import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';
import { StorageService } from '../services/storage.service';

@Injectable()
export class HttpRequestInterceptors implements HttpInterceptor {

  constructor(
    private spinner: SpinnerService,
    private storage: StorageService
  ) { }


  /**
   * http request interceptor.
   * @param request 
   * @param next 
   * @returns 
   */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.storage.getFromStorage('token');
    if (token) {
      request = request.clone({
        headers: request.headers.set('authorization', token)
      })
    }

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        const message = event.body.msg;
        this.spinner.hideSpinner();
      }
    },
      async (err: any) => {
        this.spinner.hideSpinner();

        if (err) {
          const status = err?.error?.statusCode;
          const message = err?.error?.msg;
        }
      }));
  }
}
