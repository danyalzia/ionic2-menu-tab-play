import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

// We need to import toPromise() from RxJS to convert the Observable into Promise
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JSONParserService {
  
  constructor(private jsonp: Jsonp) {}
  
  searchKey() {
    return this.jsonp
                .get('https://www.reddit.com/r/gifs/new/.json?limit=10')
                .toPromise()
                .then((request) => request.json()[1]);
  }
}