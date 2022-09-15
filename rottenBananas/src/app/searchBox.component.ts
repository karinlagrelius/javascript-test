import {MoviesService} from './movies.service'
import {Component} from '@angular/core';

@Component({
  selector: 'searchBox', // CSS selector
  template: `
    <input
      #query
      (keyup)="filterSearch(query.value)"
      type="text" placeholder="Search...">
  `
})

export class SearchBoxComponent {
  constructor(private movieService: MoviesService) {
  }

  textInput: string = '';

  filterSearch(query: string){
    this.textInput = query;
    console.log(query);
    this.movieService.setSearchTermAndFilter(this.textInput);
  }
}
