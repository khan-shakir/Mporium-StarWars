import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { IFilm } from '../interfaces/ifilm';

import { Urls } from '../helpers/urls';

@Injectable()
export class FilmService {

  constructor(private http: Http) { }

  getFilms() : Observable<IFilm[]> {
    return this.http.get(Urls.FILM)
                .map((resp: Response) => resp.json())
                .catch(this.handleError);
  }

  handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
