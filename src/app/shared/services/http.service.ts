import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/enviroments/enviroment';
import { ERROR_MESSAGE } from '../constant-files/constant';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private API_SERVER = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) {
    this.handleError = this.handleError.bind(this);
  }

  /**
   * handel error function
   * @param error
   * @returns
   */
  handleError(error: HttpErrorResponse) {
    let errorMessage;
    if (error.status === 0) {
      errorMessage = ERROR_MESSAGE.NETWORK_ERROR;
    }
    return throwError(() => error.error ? error.error.errors : {});
  }

  /**
   * get data function
   * @param apiPath
   * @param data
   * @returns
   */
  public getData(apiPath: string, data?: any) {
    let url = this.API_SERVER;
    return this.httpClient.get<any>(`${url}${apiPath}`, {
      ...(data && { params: data }),
    });
  }

  /**
   * post data function
   * @param apiPath
   * @param data
   * @param params
   * @returns
   */
  public postData(apiPath: string, data?: any, params?: any) {
    return this.httpClient.post<any>(`${this.API_SERVER}${apiPath}`, data, {
      params: params,
    });
  }

  /**
   * upload file function
   * @param apiPath
   * @param data
   * @returns
   */
  public postUploadData(apiPath: string, data?: any) {
    return this.httpClient.post<any>(`${this.API_SERVER}${apiPath}`, data, {
      headers: new HttpHeaders({
        Accept: 'multipart/form-data',
      }),
    });
  }

  /**
   * patch data function
   * @param apiPath
   * @param data
   * @param params
   * @returns
   */
  public patchData(apiPath: string, data?: any, params?: HttpParams) {
    return this.httpClient
      .patch(`${this.API_SERVER}${apiPath}`, data, { params: params })
      .pipe(
        map((response: any) => {
          return response;
        }),
        catchError(this.handleError)
      );
  }

  /**
   * put data function
   * @param apiPath
   * @param data
   * @param params
   * @returns
   */
  public putData(apiPath: string, data?: any, params?: HttpParams) {
    Object.keys(data).forEach((key) => {
      if(!data[key] && data[key] !== false) {
        delete data[key];
      }
    })
    return this.httpClient.put<any>(`${this.API_SERVER}${apiPath}`, data, {
      params: params,
    });
  }

  /**
   * delete data function
   * @param apiPath
   * @param data
   * @param params
   * @returns
   */
  public deleteData(apiPath: string, data?: any, params?: any) {
    let url = this.API_SERVER;
    return this.httpClient
      .delete(`${url}${apiPath}`, { params: params, body: data })
      .pipe(catchError(this.handleError));
  }

  /**
   * function to delete
   * @param apiPath
   * @param data
   * @returns
   */
  public delete(apiPath: string, data?: any) {
    let url = this.API_SERVER;
    return this.httpClient
      .delete(`${url}${apiPath}`, data)
      .pipe(catchError(this.handleError));
  }

}
