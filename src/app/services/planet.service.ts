import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { IPlanet } from '../interfaces/iplanet';

import { Urls } from '../helpers/urls';

@Injectable()
export class PlanetService {

  constructor(private http: Http) { }

  getPlanets() : Observable<IPlanet[]> {
    return this.http.get(Urls.PLANET)
                .map((resp: Response) => resp.json())
                .catch(this.handleError);
  }

  handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
