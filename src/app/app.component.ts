import { Component } from '@angular/core';
import { environment } from '../environments/environment'

import { HttpService } from '../app/common/service/http/http-service';
import { HttpModel } from '../app/common/service/http/http.model';

import { User } from './modules/models/user';
import { Posts } from './modules/models/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  env = environment;
  user: User;
  posts: Posts[] = [];
  httpModel: HttpModel;

  constructor(
    private http: HttpService
  ){
    // this.user = new User();
    // this.posts = new Posts();
    // this.http.run();
  }

  ngOnInit(){
    /*this.http.fetchData().subscribe(
      (data: User)=>{
        // typecasting ways

        // for only array of object
        // this.posts = [...data];
        // Object.assign(this.posts, data)

        // for nested object response i.e json with object and array of objects
        this.user = <User>data;
        // console.log(this.user);
    });*/
    this.httpModel = new HttpModel();
    this.httpModel.url = 'https://jsonplaceholder.typicode.com/comments';
    this.httpModel.request = 'GET';
    this.httpModel.params = {postId: 1};
    /*this.http.ajaxRequest(this.httpModel).subscribe((res: any)=> {
      console.log(res);
    });*/
  }

}
