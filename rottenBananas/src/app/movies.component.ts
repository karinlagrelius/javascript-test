import {Observable, Subscription} from 'rxjs';
import {MoviesService} from './movies.service';
import {Component, OnDestroy} from '@angular/core';

@Component({ // declarator function: how this component works.
  selector: 'movies', // CSS selector
  template: `
    <h2> Movies: <h2>
    <ul style="font-size:16px">
      <li *ngFor="let movie of movies">
        Title: {{movie.title}},
        Grade: {{movie.grade}}
      </li>
    </ul>
    ` // data binding, automatic update
    // directive that modifies the structure of a dom, preface with *
})

export class MoviesComponent implements OnDestroy {
  subscription: Subscription;
  movies: {id: number, grade: number, title: string}[];
  constructor(private movieService: MoviesService) { // initiate service so we can unit test, otherwise too tightly coupled
    this.movies = [];
    this.subscription = movieService.getMovies().subscribe((resp) => {
      this.movies = resp;
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
