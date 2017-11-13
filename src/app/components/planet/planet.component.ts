import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../../services/planet.service';
import { IPlanet } from '../../interfaces/iplanet';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planet: IPlanet[] = [];
  busy: Subscription;

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.loadAllPlanets();
  }

  loadAllPlanets () {
    this.busy = this.planetService.getPlanets()
      .subscribe((data: IPlanet[]) => this.planet = data);
  }
}

