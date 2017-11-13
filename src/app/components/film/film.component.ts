import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { IFilm } from '../../interfaces/ifilm';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  films: IFilm[] = [];
    busy: Subscription;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.loadAllFilms();
  }

  loadAllFilms () {
     this.busy = this.filmService.getFilms()
      .subscribe((data: IFilm[]) => this.films = data);
  }

}
