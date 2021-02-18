import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpModel, HttpFileUploadModel } from './http.model';
import { UserDetails } from '../../../modules/userdetails/userdetails.model';
import { Response } from '../../../modules/models/response.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(
    private http: HttpClient
  ) {

  }
  run() {
    console.log("service running");
  }

  fetchData(): Observable<any> {
    // 'https://jsonplaceholder.typicode.com/posts/1' single User
    // 'https://jsonplaceholder.typicode.com/comments?postId=1' Multiple Posts // array of object
    // 'https://reqres.in/api/users?page=2'
    return this.http.get<any>('https://reqres.in/api/users?page=2');
  }

  ajaxRequest(http: HttpModel): Observable<any> {
    if (http.request === 'GET') {
      if (http.params === null) {
        return this.http.get<any>(environment.url + http.url);
      } else {
        let httpParams = new HttpParams();
        const queryParams = http.params;
        Object.keys(queryParams).forEach(element => {
          if (queryParams[element] !== undefined && queryParams[element] !== null) {
            httpParams = httpParams.append(element, queryParams[element]);
          }
        });
        return this.http.get<any>(environment.url + http.url, {
          params: httpParams
        });
      }
    } else if (http.request === 'POST') {
      /*const options =  {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }*/
      return this.http.post(environment.url + http.url, http.data); // , options
    } else if (http.request === 'PUT') {

    } else if (http.request === 'DELETE') {

    }
  }

  ajaxFormData(http: HttpFileUploadModel): Observable<any> {
    let formData: any = new FormData();
    formData.append('file', http.file);
    Object.keys(http.data).forEach(element => {
      if (http.data[element] !== undefined && http.data[element] !== null) {
        if (Array.isArray(http.data[element])) {
          // console.log(typeof(http.data[element]));
          // formData.append(`${element}`, JSON.stringify(http.data[element]));
          http.data[element].forEach(obj => {
            formData.append(`${element}`, JSON.stringify(obj));
          });
        } else {
          formData.append(element, http.data[element]);
        }
      }
    });
    let json = this.convertFD2JSON(formData);
    for (var value of formData.values()) {
      console.log(typeof (value));
    }
    /*const httpOptions = {
      headers: new HttpHeaders({
       "Content-Type": "multipart/form-data" // 👈
      })
    };*/
    const HttpUploadOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    }
    return this.http.post<any>(environment.url + http.url, formData);
    /*{
      reportProgress: true,
      observe: 'events'
    }*/
  }

  ajaxFileDownload(http: HttpModel) {
    if (http.request === 'GET') {
      if (http.params === null) {
        return this.http.get<any>(environment.url + http.url);
      } else {
        let httpParams = new HttpParams();
        const queryParams = http.params;
        Object.keys(queryParams).forEach(element => {
          if (queryParams[element] !== undefined && queryParams[element] !== null) {
            httpParams = httpParams.append(element, queryParams[element]);
          }
        });
        return this.http.get(environment.url + http.url, {
          params: httpParams,
          observe: 'response',
          responseType: 'blob'
        });
      }
    } else if (http.request === 'POST') {
      return this.http.post(environment.url + http.url, http.data, {
        observe: 'response',
        responseType: 'blob'
      });
    }
  }

  convertFD2JSON(formData) {
    let obj = {};
    for (let key of formData.keys()) {
      obj[key] = formData.get(key);
    }
    return obj;
  }

  getUser(id): Observable<Response> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<Response>(environment.url + environment.endpoints.USER_DETAIL, {params: params} );
  }
}
