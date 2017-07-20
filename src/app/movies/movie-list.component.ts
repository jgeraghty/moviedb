import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Movie } from './movie';
import { MoviePopular } from './movie.popular';
import { MovieService } from './movie.service';

@Component({
	selector: 'movie-list',
	templateUrl: 'movie-list.component.html',
	styleUrls: ['movie-list.component.css'],
	providers: [ MovieService ]
})
export class MovieListComponent implements OnInit {
	@Input() movies: Movie[];
	moviePopular: MoviePopular;
	// movies: Movie[];

	errorMessage: string;
	mode = "Observable";

	constructor(
		private movieService: MovieService,
		private router: Router
	) {
	}

	ngOnInit() {
		// this.getMovies();
	}

	// getMovies() {
	// 	this.movieService.getMovies()
	// 			.subscribe(
	// 				movies => this.movies = movies.results,
	// 				error => this.errorMessage = <any>error
	// 			);
	// }

	goToMovie(movie: Movie): void {
		let link = ['/movie', movie.id];
		this.router.navigate(link);
	}
}
