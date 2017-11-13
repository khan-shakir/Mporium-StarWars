import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusyModule } from 'angular2-busy';

/* App Component */
import { AppComponent } from './app.component';

/* Routing Module */
import { AppRouting } from './app.routing';

/* Custom Components */
import { FilmComponent } from './components/film/film.component';
import { PeopleComponent } from './components/people/people.component';
import { StarshipComponent } from './components/starship/starship.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { SpeciesComponent } from './components/species/species.component';
import { PlanetComponent } from './components/planet/planet.component';
import { HeaderComponent } from './components/header/header.component';

/* Custom Services */
import { FilmService } from './services/film.service';
import { PlanetService } from './services/planet.service';
import { PeopleService } from "./services/people.service";
import { SpeciesService } from "./services/species.service";
import { StarshipService } from "./services/starship.service";
import { VehicleService } from "./services/vehicle.service";
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    PeopleComponent,
    StarshipComponent,
    VehicleComponent,
    SpeciesComponent,
    PlanetComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouting,
    FlexLayoutModule,
    BrowserAnimationsModule,
    BusyModule
  ],
  providers: [
    FilmService,
    PlanetService,
    PeopleService,
    SpeciesService,
    StarshipService,
    VehicleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
