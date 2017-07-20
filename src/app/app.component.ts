import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Lattice Movies!';

  constructor(
		private router: Router
	) {}

  searchMovies(searchTerm: HTMLInputElement): void {
    console.log(`User entered: ${searchTerm.value}`);
    this.router.navigate(['/search/'+searchTerm.value]);
  }
}
