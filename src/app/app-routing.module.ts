import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviePopularComponent } from './movies/movie-popular.component';
import { MovieSearchComponent } from './movies/movie-search.component';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieShowComponent } from './movies/movie-show.component';

const routes: Routes = [
	{ path: '', redirectTo: '/movies', pathMatch: 'full' },
	{ path: 'movies', component: MoviePopularComponent },
	{ path: 'movie/:id', component: MovieShowComponent },
	{ path: 'search/:term', component: MovieSearchComponent },

	// otherwise redirect to home
	{ path: '**', redirectTo: '' }
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}

// export const routing = RouterModule.forRoot(appRoutes);
