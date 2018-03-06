import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccueilComponent} from "./film/accueil/accueil.component";
import {MovieListComponent} from "./film/movie-list/movie-list.component";
import {StreamFilmComponent} from "./film/stream-film/stream-film.component";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";


const routes: Routes =[
    {path : 'accueil', component: AccueilComponent},
    {path : 'listedefilm', component: MovieListComponent},
    {path : 'voirlefilm/:id', component: StreamFilmComponent},
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
    exports:[
        RouterModule
    ],
  declarations: []
})
export class AppRoutingModule { }
