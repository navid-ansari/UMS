import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpService } from '../../../common/service/http/http-service';
import { HttpModel, ReqType } from '../../../common/service/http/http.model';
import { TutorialsService } from '../tutorials.service';

import { TutorialResponse } from '../model/tutorial.model';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  httpModel: HttpModel;
  tutorialResponse: TutorialResponse

  constructor(
    private _httpService: HttpService,
    private _http: HttpClient,
    private _tutorialsService: TutorialsService
  ) { }

  ngOnInit(): void {
    this.getJson();
  }

  getJson() {
    this._tutorialsService.getJavascriptJson().subscribe((json: TutorialResponse) => {
      console.log(json);
      this.tutorialResponse = {...json};
      // this.tutorialResponse = json;
    })
  }

}
