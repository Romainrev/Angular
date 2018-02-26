import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    private movieList : Array <object>;
    constructor() { }

    ngOnInit() {
        this.movieList = [{
          titre : "Titanic",
            realisateur : "James Cameron",
            sortie: "1997",
            classification : "Tout public"},

            {titre : "The Raid 2",
                realisateur : "Gareth Evans",
                sortie : "2014",
                classification : "-16 ans avec avertissement"},

            {titre : "Old Boy",
                realisateur : "Park Chan-wook",
                sortie : "2004",
                classification : "-16 ans"},

            {titre : "Reservoir Dogs",
                realisateur : "Quentin Tarantino",
                sortie : "1992",
                classification : "-16 ans"},

            {titre : "Casino",
                realisateur : "Martin Scorcese",
                sortie : "1996",
                classification : "-12 ans"}





        ]

    }

}
