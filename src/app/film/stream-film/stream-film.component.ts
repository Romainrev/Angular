import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-stream-film',
  templateUrl: './stream-film.component.html',
  styleUrls: ['./stream-film.component.css']
})
export class StreamFilmComponent implements OnInit {
private movieList : Array<object>
  private movie : object;
    constructor(private route: ActivatedRoute) {
    }

    ngOnInit()
{

    this.movieList = [{
        titre: "Titanic",
        realisateur: "James Cameron",
        sortie: "1997-01-07",
        classification: "Tout public",
        synopsis: "Southampton, 10 avril 1912. Le paquebot le plus grand et le plus moderne du monde, réputé pour" +
        " son insubmersibilité, le \"Titanic\", appareille pour son premier voyage. Quatre jours plus tard, " +
        "il heurte un iceberg. A son bord, un artiste pauvre et une grande bourgeoise tombent amoureux.",
        image: "https://media.senscritique.com/media/000004715818/source_big/Titanic.jpg",
        note: "5",
        id: 1
    },


        {
            titre: "The Raid 2",
            realisateur: "Gareth Evans",
            sortie: "2014-07-23",
            classification: "-16 ans avec avertissement",
            synopsis: "Après un combat sans merci pour s’extirper d’un immeuble rempli de criminels et de fous furieux," +
            " laissant derrière lui des monceaux de cadavres de policiers et de dangereux truands, Rama, jeune flic de Jakarta," +
            " pensait retrouver une vie normale, avec sa femme et son tout jeune fils…. Mais il se trompait. On lui " +
            "impose en effet une nouvelle mission : Rama devra infiltrer le syndicat du crime, où coexistent dans une " +
            "sorte de statu quo mafia indonésienne et yakusas. Sous l’identité de « Yuda », un tueur sans pitié, il se" +
            " laisse jeter en prison afin d’y gagner la confiance d'Uco, le fils d'un magnat du crime indonésien - son " +
            "*ticket d’entrée pour intégrer l’organisation. Sur fond de guerre des gangs, il risquera sa vie dans un " +
            "dangereux jeu de rôle destiné à porter un coup fatal à l’empire du crime.",
            image: "http://fr.web.img6.acsta.net/pictures/14/06/18/17/17/049080.jpg",
            note: "4",
            id: 2
        },


        {
            titre: "Old Boy",
            realisateur: "Park Chan-wook",
            sortie: "2004-10-29",
            classification: "-16 ans",
            synopsis: "A la fin des années 80, Oh Dae-Soo, père de famille sans histoire, est enlevé un jour devant " +
            "chez lui. Séquestré pendant plusieurs années dans une cellule privée, son seul lien avec l'extérieur est " +
            "une télévision. Par le biais de cette télévision, il apprend le meurtre de sa femme, meurtre dont il est" +
            " le principal suspect. Au désespoir d'être séquestré sans raison apparente succède alors chez le héros une" +
            " rage intérieure vengeresse qui lui permet de survivre. Il est relâché 15 ans plus tard, toujours sans explication." +
            " Oh Dae-Soo est alors contacté par celui qui semble être le responsable de ses malheurs, qui lui propose de" +
            " découvrir qui l'a enlevé et pourquoi. Le cauchemar continue pour le héros.",
            image: "http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/35/24/25/18383433.jpg",
            note: "4",
            id: 3
        },


        {
            titre: "Reservoir Dogs",
            realisateur: "Quentin Tarantino",
            sortie: "1992-10-02",
            classification: "-16 ans",
            synopsis: "Après un hold-up manqué, des cambrioleurs de haut vol font leurs comptes dans une confrontation" +
            " violente, pour découvrir lequel d'entre eux les a trahis.",
            image: "https://images-na.ssl-images-amazon.com/images/I/51GXSW6P4KL._SY445_.jpg",
            note: "4",
            id: 4
        },

        {
            titre: "Casino",
            realisateur: "Martin Scorcese",
            sortie: "1996-03-13",
            classification: "-12 ans",
            synopsis: "En 1973, Sam Ace Rothstein est le grand manitou de la ville de toutes les folies, Las Vegas." +
            " Il achète et épouse une virtuose de l’arnaque, Ginger Mc Kenna, qui sombre bien vite dans l’alcool et la " +
            "drogue. Mais un autre ennui guette Sam, son ami d’enfance Nicky Santoro, qui entreprend de mettre la ville en coupe réglée…",
            image: "http://fr.web.img5.acsta.net/r_1280_720/pictures/15/09/02/15/06/131985.jpg",
            note: "4",
            id: 5
        },


    ]
    let id = this.route.snapshot.params['id'];
    for (let i = 0; i < this.movieList.length; i++) {
        if (this.movieList[i].id==id) {
            this.movie = this.movieList[i];
        }
    }
}



}