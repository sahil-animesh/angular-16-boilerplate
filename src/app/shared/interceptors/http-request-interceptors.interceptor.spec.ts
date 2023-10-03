import { TestBed } from '@angular/core/testing';

import { HttpRequestInterceptorsInterceptor } from './http-request-interceptors.interceptor';

describe('HttpRequestInterceptorsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpRequestInterceptorsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpRequestInterceptorsInterceptor = TestBed.inject(HttpRequestInterceptorsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
