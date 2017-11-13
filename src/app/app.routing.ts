import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmComponent } from './components/film/film.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetComponent } from './components/planet/planet.component';
import { SpeciesComponent } from './components/species/species.component';
import { StarshipComponent } from './components/starship/starship.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'films', pathMatch: 'full' },
  { path: 'film',  component: FilmComponent},
  { path: 'planet', component: PlanetComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'starship', component: StarshipComponent },
  { path: 'vehicle', component: VehicleComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }