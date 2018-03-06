import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotePipe} from "./note.pipe";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {SurvolFilmDirective} from "./survol-film.directive";
import {RouterModule, Routes} from "@angular/router";
import { StreamFilmComponent } from './stream-film/stream-film.component';
import { AccueilComponent } from './accueil/accueil.component';
import {AppRoutingModule} from "../app-routing.module";




@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [
      AccueilComponent,
      MovieListComponent,
      SurvolFilmDirective,
      NotePipe,
      StreamFilmComponent,
  ]
})
export class FilmModule { }
