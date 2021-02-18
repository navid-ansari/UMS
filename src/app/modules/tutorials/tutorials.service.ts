import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TutorialResponse } from './model/tutorial.model';

@Injectable({
    providedIn: 'root',
})
export class TutorialsService {
    constructor(private http: HttpClient) { }

    getJavascriptJson() {
        return this.http.get <TutorialResponse>("./assets/json/javascript.json");
    }
}