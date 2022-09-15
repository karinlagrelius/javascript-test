// separating the http endpoint from the class component
// allows us to unit test that component without any http service.
// import data from './db.json';
import { default as data } from './db.json';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class MoviesService {
  movies: {id: number, grade: number, title: string}[] = (data.videos);
  searchTerm: string = '';
  filteredMovies: BehaviorSubject<{id: number, grade: number, title: string}[]> = new BehaviorSubject(data.videos);

  setSearchTermAndFilter(textInput: string){
    this.searchTerm = textInput;
    // filter search according to search term:
    this.filteredMovies.next( (this.searchTerm) ?
     this.movies.filter(p => p.title.toLowerCase().includes(this.searchTerm.toLowerCase())) :
     this.movies);
    console.log(this.filteredMovies);
  }

  changeGrade(){
    // Args: id, newGrade

    // update this.movies
    // update this.filteredMovies
    // update database
  }

  getMovies(){
    return this.filteredMovies;
  }
}
