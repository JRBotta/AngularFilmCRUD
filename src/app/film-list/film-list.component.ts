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
  newFilm = new Film();
  editFilm = null;
  newActor = new Actor();
  viewActors = false;
  actorHold = null;

  deleteFilm() {
    this.films.splice(this.films.indexOf(this.selected), 1);
    this.selected = null;
  }
  setEditFilm() {
    this.editFilm = Object.assign({}, this.selected);
  }
  updateFilm() {
    for (const p in this.editFilm) {
      if (this.editFilm[p] !== null) {
        this.films[this.editFilm.id - 1][p] = this.editFilm[p];
      }
    }
    this.selected = this.films[this.editFilm.id - 1];
    this.editFilm = null;
  }
  addFilm() {
    this.films.push(this.newFilm);
    this.selected = this.newFilm;
    this.newFilm = new Film();
  }
  displayFilm(film) {
    this.selected = film;
  }
  deleteActor(actor) {
    this.actors.splice(this.actors.indexOf(actor), 1);
    for (let i = 0; i < this.films.length; i++) {
      for (let j = 0; j < this.films[i].actors.length; j++) {
        if (this.films[i].actors[j] === actor) {
          this.films[i].actors.splice(j, 1);
        }
      }
    }
    this.selected = null;
  }
  addActor() {
    this.actors.push(this.newActor);
    this.viewActors = true;
    this.newActor = new Actor();
  }
  addActorToFilm() {
    if (this.actorHold != null) {
      this.selected.actors.push(this.actors[this.actorHold - 1]);
      this.actorHold = null;
    }
  }
  constructor() {}

  ngOnInit() {}
}
