import {MoviesService} from './movies.service'
import {Component} from '@angular/core';

@Component({ // declarator function: how this component works.
  selector: 'movies', // CSS selector
  template: `
    <h2>{{ getTitle() }}<h2>
    <ul>
      <li *ngFor="let movie of movies">
        Title: {{movie.title}},
        Grade: {{movie.grade}}
      </li>
    </ul>
    ` // data binding, automatic update
    // directive that modifies the structure of a dom, preface with *
})

export class MoviesComponent {
  constructor(service: MoviesService) { // initiate service so we can unit test, otherwise too tightly coupled
    this.movies = service.getMovies();
  }
  movies;
  title = "Rated movies so far:";
  getTitle() {
    return this.title;
  } 

}
