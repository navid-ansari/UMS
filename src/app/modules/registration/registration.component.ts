import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

import { Registration, Address } from './registration.model';

import { HttpService } from '../../common/service/http/http-service';
import { HttpModel, ReqType, HttpFileUploadModel } from '../../common/service/http/http.model';

import { environment } from '../../../environments/environment';
import { DropDownVO } from '../../common/models/DropDownVO';
import { ProfilePicExtensionValidator } from '../../common/validators/profile-pic-extension.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationModel: Registration = new Registration();
  address: Address = new Address();
  genderList: DropDownVO[] = [];
  registrationForm: FormGroup;

  httpModel: HttpModel;
  httpFileUploadModel: HttpFileUploadModel;
  httpFileUploadModelFormData: HttpFileUploadModel;
  submitted = false;
  fileToUpload: File;

  constructor(
    private _formBuilder: FormBuilder,
    private _httpService: HttpService
  ) {
    this.registrationForm = this._formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', Validators.required],
      address: this._formBuilder.array([]),
      password: ['', Validators.required],
      profilepic: [null, [Validators.required, ProfilePicExtensionValidator.validate]],
      tnc: [false, Validators.requiredTrue],
    });
  };

  adressess(): FormArray {
    return this.registrationForm.get("address") as FormArray
  };

  newAddress(): FormGroup {
    return this._formBuilder.group({
      country: ['', Validators.required],
      state: ['', Validators.required]
    })
  };

  addAddress() {
    if (this.registrationModel.address.length == 2) {
      return
    } else {
      this.adressess().push(this.newAddress());
      this.registrationModel.address.push({
        country: '',
        state: ''
      })
    }
    console.log(this.registrationForm);
  }

  removeAddress(i: number) {
    this.adressess().removeAt(i);
    this.registrationModel.address.splice(i, 1);
  }

  get f(){
    return this.registrationForm.controls;
  }

  submitRegister() {
    this.submitted = true;
    console.log(this.registrationForm);
    if (this.registrationForm.invalid) {
      return;
    } else {
      /*this.httpModel = new HttpModel(environment.endpoints.registration, ReqType.POST, this.registrationModel, null);
      this._httpService.ajaxRequest(this.httpModel).subscribe(
        (res)=> {

      },
        (error)=> {

      });*/

      /*this.httpFileUploadModel = new HttpFileUploadModel(
        environment.endpoints.REGISTRATION,
        ReqType.POST,
        this.registrationModel,
        this.fileToUpload
      ); // with Json*/
      this.httpFileUploadModelFormData = new HttpFileUploadModel(
        environment.endpoints.REGISTRATION_WITH_FORMDATA,
        ReqType.POST,
        this.registrationModel,
        this.fileToUpload
      ); // with FormData
      this._httpService.ajaxFormData(this.httpFileUploadModelFormData).subscribe(
        (res) => {

        },
        (error) => {

        }
      );
    }
  }

  selectProfilePic(event) {
    this.fileToUpload = event.target.files[0];
  }

  ngOnInit() {
    this.getGender();
    this.addAddress();
  }

  getGender() {
    this.httpModel = new HttpModel(environment.endpoints.MASTER_GENDER_LIST, 'GET', null, null);
    this._httpService.ajaxRequest(this.httpModel).subscribe((res: DropDownVO[]) => {
      res.forEach(el => {
        this.genderList.push(new DropDownVO(el.name, el.id, el.code, el.description));
      });
    });
  }

}
