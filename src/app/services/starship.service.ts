import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { IStarship } from '../interfaces/istarship';

import { Urls } from '../helpers/urls';

@Injectable()
export class StarshipService {

  constructor(private http: Http) { }

  getStarships() : Observable<IStarship[]> {
    return this.http.get(Urls.STARSHIP)
                .map((resp: Response) => resp.json())
                .catch(this.handleError);
  }

  handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
