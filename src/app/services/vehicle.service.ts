import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { IVehicle } from '../interfaces/ivehicle';

import { Urls } from '../helpers/urls';

@Injectable()
export class VehicleService {

  constructor(private http: Http) { }

  getVehicles() : Observable<IVehicle[]> {
    return this.http.get(Urls.VEHICLE)
                .map((resp: Response) => resp.json())
                .catch(this.handleError);
  }

  handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
