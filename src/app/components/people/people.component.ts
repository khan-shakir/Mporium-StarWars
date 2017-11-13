import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { IPeople } from '../../interfaces/ipeople';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: IPeople[] = [];
  busy: Subscription;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.loadAllPeople();
  }

  loadAllPeople () {
    this.busy = this.peopleService.getPeople()
      .subscribe((data: IPeople[]) => this.people = data);
  }

}
