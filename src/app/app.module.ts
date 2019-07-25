import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { LandingComponent } from './landing/landing.component';
import { MoviesComponent } from './movies/movies.component';
import { PlanetsComponent } from './planets/planets.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { PlanetComponent } from './planet/planet.component';
import { MovieComponent } from './movie/movie.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    LandingComponent,
    MoviesComponent,
    PlanetsComponent,
    ItemsComponent,
    PersonComponent,
    PlanetComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
