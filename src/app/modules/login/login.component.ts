import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from './login.model';
import { HttpService } from '../../common/service/http/http-service';
import { HttpModel, ReqType } from '../../common/service/http/http.model';

import { UtilityService } from '../../common/service/utility/utility.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: Login = new Login();
  httpModel: HttpModel;

  constructor(
    private _router: Router,
    private _httpService: HttpService,
    private _utilityService: UtilityService
  ) { }

  ngOnInit() {
  }

  login() {
    this.httpModel = new HttpModel(environment.endpoints.login, ReqType.POST, this.loginModel, null);
    this._httpService.ajaxRequest(this.httpModel).subscribe((res)=> {
      this._utilityService.setUserData(res.response);
      this._router.navigate(['./userdetails']);
    });
  }

}
