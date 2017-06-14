import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Service to fetch response to user queries
*/
@Injectable()
export class BotServiceProvider {
  response: string;
  constructor(public http: Http) {
    
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
