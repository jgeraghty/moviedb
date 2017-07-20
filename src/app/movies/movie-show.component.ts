import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/mergeMap';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'movie-show',
  templateUrl: './movie-show.component.html',
  styleUrls: ['./movie-show.component.css'],
	providers: [ MovieService ]
})

export class MovieShowComponent implements OnInit {
	constructor(
		private http: Http,
		private movieService: MovieService,
		private route: ActivatedRoute
	) {}

	@Input()
	movie: Movie;

	ngOnInit(): void {
		let movieRequest = this.route.params
				.flatMap((params: Params) =>
					this.movieService.getMovie(+params['id']));
		movieRequest.subscribe(response => this.movie = response);
	}
}
