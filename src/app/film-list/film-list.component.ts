import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/actor';
import { Film } from '../models/film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  actors: Actor[] = [
    new Actor('Billy Bob', 'Thorton'),
    new Actor('Scarlett', 'Johansson'),
    new Actor('Ben', 'Affleck')
  ];

  films: Film[] = [
    new Film(
      'Academy Dinosaur',
      ' A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies',
      1993,
      86,
      'PG',
      [this.actors[0], this.actors[1]]
    ),
    new Film(
      'Adaptation Holes',
      'A Astounding Reflection of a Lumberjack And a Car who must Sink a Lumberjack in A Baloon Factory',
      1998,
      72,
      'NC-17',
      [this.actors[0], this.actors[2]]
    ),
    new Film(
      'Beethoven Exorcist',
      'A Epic Display of a Pioneer And a Student who must Challenge a Butler in The Gulf of Mexico',
      1984,
      140,
      'R',
      [this.actors[1], this.actors[2]]
    )
  ];
  selected = null;

  displayFilm(film) {
    this.selected = film;
    console.log(this.selected);
  }
  constructor() {}

  ngOnInit() {}
}
