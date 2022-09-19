// separating the http endpoint from the class component
// allows us to unit test that component without any http service.
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
 providedIn: 'root',
})
export class MoviesService {
  movies: Video[] = [];
  searchTerm: string = '';
  filteredMovies: BehaviorSubject<Video[]> = new BehaviorSubject<Video[]>([]);

  constructor(private http: HttpClient){
     this.http.get('http://localhost:3000/videos').subscribe( res => {
       this.movies = <Video[]>(res); // cast to video type
       this.filteredMovies.next(<Video[]>(res));
     });
  }
  setSearchTermAndFilter(textInput: string){
    this.searchTerm = textInput;
    // filter search according to search term:
    this.filteredMovies.next( (this.searchTerm) ?
     this.movies.filter(p => p.title.toLowerCase().includes(this.searchTerm.toLowerCase())) :
     this.movies);
    console.log(this.filteredMovies);
  }

  updateGradeDB(movieId: number, newGrade: number){
    console.log("about to change " + this.movies[movieId-1].title + " to " + newGrade);
    this.movies[movieId-1].grade = newGrade;
    // update database:
    let video: Video = {id: movieId, grade: newGrade, title: this.movies[movieId-1].title};
    this.http.put<Video>('http://localhost:3000/videos/'+movieId, video).subscribe();
  }

  getMovies(){
    return this.filteredMovies;
  }
}

// interface for video:
export interface Video {
  id: number,
  grade: number,
  title: string
}
