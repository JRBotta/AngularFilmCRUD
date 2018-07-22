import { Actor } from './actor';

let count = 1;
export class Film {
  id: number;
  title: string;
  description: string;
  releaseYear: number;
  length: number;
  rating: string;
  actors: Actor[];

  constructor(
    title?: string,
    description?: string,
    releaseYear?: number,
    length?: number,
    rating?: string,
    actors?: Actor[]
  ) {
    this.id = count++;
    this.title = title;
    this.description = description;
    this.releaseYear = releaseYear;
    this.length = length;
    this.rating = rating;
    this.actors = actors;
  }
}
