import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MovieListComponent } from './movies/movie-list.component';
import { MoviePopularComponent } from './movies/movie-popular.component';
import { MovieSearchComponent } from './movies/movie-search.component';
import { MovieShowComponent } from './movies/movie-show.component';
import { MovieService } from './movies/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieShowComponent,
    MoviePopularComponent,
    MovieSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		AppRoutingModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
