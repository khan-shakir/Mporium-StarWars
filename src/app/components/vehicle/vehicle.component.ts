import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { IVehicle } from '../../interfaces/ivehicle';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicle: IVehicle[] = [];
  busy: Subscription;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.loadAllVehicles();
  }

  loadAllVehicles () {
    this.busy = this.vehicleService.getVehicles()
      .subscribe((data: IVehicle[]) => this.vehicle = data);
  }

}

