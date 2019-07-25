import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {PeopleComponent} from './people/people.component';
import {PersonComponent} from './person/person.component';
import {PlanetsComponent} from './planets/planets.component';
import {PlanetComponent} from './planet/planet.component';
import {MoviesComponent} from './movies/movies.component';
import {MovieComponent} from './movie/movie.component';


const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'people/:movie', component: PersonComponent},
  { path: 'planets', component: PlanetsComponent},
  { path: 'planets/:planet', component: PlanetComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'movies/:movie', component: MovieComponent}
];

// { path: 'movies/:movie', component: Movie}}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// { path: 'blog', component: BlogComponent},
// { path: 'about', component: AboutComponent},
// { path: 'contact', component: ContactComponent},
// { path: 'blog-post/:token', component: BlogPostComponent},
// { path: 'admin', component: AdminComponent}
