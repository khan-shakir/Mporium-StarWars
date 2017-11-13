import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { IPeople } from '../interfaces/ipeople';

import { Urls } from '../helpers/urls';

@Injectable()
export class PeopleService {

  constructor(private http: Http) { }

  getPeople() : Observable<IPeople[]> {
    return this.http.get(Urls.PEOPLE)
                .map((resp: Response) => resp.json())
                .catch(this.handleError);
  }

  handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
