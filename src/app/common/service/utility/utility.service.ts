import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, iif } from 'rxjs';

import { HttpModel, HttpFileUploadModel } from '../http/http.model';
import { environment } from '../../../../environments/environment';
import { isArray } from 'util';

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  userData: any = null;

  constructor(
    private http: HttpClient
  ) {

  }

  setUserData(data: any) {
      this.userData = data;
  }

  getUserData() {
    return this.userData;
  }
  
}
