import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../../services/species.service';
import { ISpecies } from '../../interfaces/ispecies';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  species: ISpecies[] = [];
  busy: Subscription;

  constructor(private speciesService: SpeciesService) { }

  ngOnInit() {
    this.loadAllSpecies();
  }

  loadAllSpecies () {
    this.busy = this.speciesService.getSpecies()
      .subscribe((data: ISpecies[]) => this.species = data);
  }

}
