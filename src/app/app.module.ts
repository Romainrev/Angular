import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FilmModule} from "./film/film.module";

import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';




@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FilmModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
