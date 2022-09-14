// separating the http endpoint from the class component
// allows us to unit test that component without any http service.
// import data from './db.json';
import { default as data } from './db.json';

export class MoviesService {
  movies = data.videos;

  getMovies(){
    return this.movies;
  }
}
