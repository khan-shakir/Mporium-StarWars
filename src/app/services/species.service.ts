import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { ISpecies } from '../interfaces/ispecies';

import { Urls } from '../helpers/urls';

@Injectable()
export class SpeciesService {

  constructor(private http: Http) { }

  getSpecies() : Observable<ISpecies[]> {
    return this.http.get(Urls.SPECIES)
                .map((resp: Response) => resp.json())
                .catch(this.handleError);
  }

  handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
