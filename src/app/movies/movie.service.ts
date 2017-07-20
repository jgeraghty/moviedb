import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MoviePopular } from './movie.popular';
import { Movie } from './movie';

@Injectable()
export class MovieService {
  // private baseUrl = 'http://localhost:3000/stations';
  private apiKey = '?api_key=5b19221d20b929615d236692cea743e4';
  private baseUrl = 'https://api.themoviedb.org/3';
  constructor(private http: Http) { }

  getMovies(): Observable<MoviePopular> {
		return this.http.get(this.baseUrl + '/movie/popular' + this.apiKey)
										.map((response: Response) => <MoviePopular>response.json())
										.catch(this.handleError);
	}

  searchMovie(term: string){
		return this.http.get(this.baseUrl + '/search/movie' + this.apiKey + '&query=' + term)
										.map((response: Response) => <MoviePopular>response.json())
										.catch(this.handleError);
  }

  getMovie(id: number) {
    return this.http.get(this.baseUrl + '/movie/' + id + this.apiKey)
                    .map((response: Response) => response.json())
                    .catch(this.handleError);
  }

  // private helper methods

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
