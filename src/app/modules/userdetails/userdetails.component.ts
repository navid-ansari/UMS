import { Component, OnInit } from '@angular/core';

import { UserDetails } from './userdetails.model';
import { Response } from '../models/response.model';

import { HttpService } from '../../common/service/http/http-service';
import { HttpModel, ReqType } from '../../common/service/http/http.model';
import { environment } from '../../../environments/environment';

import { UtilityService } from '../../common/service/utility/utility.service';
import { DropDownVO } from '../../common/models/DropDownVO';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  public userDetails: UserDetails = {};
  // public userDetails = {} as UserDetails;
  genderList: DropDownVO[] = [];
  retrievedImage: any;
  base64Data: any;

  constructor(
    private _httpService: HttpService,
    private _utilityService: UtilityService
  ) { }

  ngOnInit() {
    this.getGender();
    this.getUserDetails();
  }

  getUserDetails() {
    const userData = this._utilityService.getUserData();
    /*this._httpService.ajaxRequest(
      new HttpModel(environment.endpoints.USER_DETAIL, ReqType.GET, null, { id: userData.id }))
      .subscribe((res: Response) => {
        this.userDetails = { ...res.response };
        this.base64Data = this.userDetails.profilePicture;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }
      );*/

    this._httpService.getUser(userData.id).subscribe((res: Response) => {
      this.userDetails = { ...res.response };
      this.base64Data = this.userDetails.profilePicture;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    })
  };

  getGender() {
    this._httpService.ajaxRequest(new HttpModel(environment.endpoints.MASTER_GENDER_LIST, 'GET', null, null)).subscribe((res: DropDownVO[]) => {
      res.forEach(el => {
        this.genderList.push(new DropDownVO(el.name, el.id, el.code, el.description));
      });
    });
  }

  downloadProfileImage() {
    this._httpService.ajaxFileDownload(new HttpModel(environment.endpoints.DOWNLOAD_PROFILE_IMAGE, 'GET', null, { id: this._utilityService.getUserData().id }))
      .subscribe((res: any) => {
        const blob = new Blob([res.body], { type: 'image/png' });
        const url = window.URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.download = res.headers.get('filename');
        anchor.href = url;
        anchor.click();
      });
  }

}
