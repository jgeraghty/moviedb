import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Movie } from './movie';
import { MoviePopular } from './movie.popular';
import { MovieService } from './movie.service';
import { MovieListComponent } from './movie-list.component';

@Component({
	selector: 'movie-popular',
	templateUrl: 'movie-popular.component.html',
	styleUrls: ['movie-popular.component.css'],
	providers: [ MovieService ],
})
export class MoviePopularComponent implements OnInit {
	moviePopular: MoviePopular;
	movies: Movie[];

	errorMessage: string;
	mode = "Observable";

	constructor(
		private movieService: MovieService,
		private router: Router
	) {
	}

	ngOnInit() {
		this.getMovies();
	}

	getMovies() {
		this.movieService.getMovies()
				.subscribe(
					movies => this.movies = movies.results,
					error => this.errorMessage = <any>error
				);
	}

	goToMovie(movie: Movie): void {
		let link = ['/movie', movie.id];
		this.router.navigate(link);
	}
}
