import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../../services/starship.service';
import { IStarship } from '../../interfaces/istarship';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  starship: IStarship[] = [];
  busy: Subscription;

  constructor(private starshipService: StarshipService) { }

  ngOnInit() {
    this.loadAllStarship();
  }

  loadAllStarship () {
    this.busy = this.starshipService.getStarships()
      .subscribe((data: IStarship[]) => this.starship = data);
  }

}
