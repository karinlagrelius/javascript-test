import {Observable, Subscription} from 'rxjs';
import {MoviesService} from './movies.service';
import {Component, OnDestroy, ViewChild} from '@angular/core';
// import {MatInputModule} from '@angular/material/input';


@Component({ // declarator function: how this component works.
  selector: 'movies', // CSS selector
  template: `
    <h2> Movies: <h2>
    <ul style="font-size:16px">
      <li *ngFor="let movie of movies">
        <div style="padding: 10px; background: #F0F0F0; border-radius: 25px; width: 200px;">
          Title: {{movie.title}}
        <br>
        Grade: {{movie.grade}}
              <input #range type="range" name="grade" value={{movie.grade}} max="5">
              <button (click)="updateGrade(movie.id, range.value)"> Update </button>
        </div>
        <br>
      </li>
    </ul>
    ` // data binding, automatic update
    // directive that modifies the structure of a dom, preface with *
})

export class MoviesComponent implements OnDestroy {
  subscription: Subscription;
  grade: number = 0;
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

  updateGrade(movieId: number, newGrade: string){
    console.log("gonna change a grade! sending to service");
    this.movieService.updateGradeDB(movieId, parseInt(newGrade));
  }
}
