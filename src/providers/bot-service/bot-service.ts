import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BotServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BotServiceProvider {
  //http: Http;
  response: string;
  constructor(public http: Http) {
    //this.http = Http;
    console.log('Hello BotServiceProvider Provider');
  }


sendMessage(message:string) {
  return new Promise(resolve => {
    this.http.get('data/data.json')
      .map(res => res.json())
      .subscribe(data => {
        this.response = data.response;
        resolve(this.response);
      });
  });
}
}
