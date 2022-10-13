import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private movieService: MovieServiceService) {}
  animeMovies: any[] = [];
  isLoading = false;
  errorMessage = '';
  ngOnInit(): void {
    this.getMovieByCategory();
  }
  getMovieByCategory() {
    this.isLoading = true;
    this.movieService
      .getMovieByCategory('Animation', '5','')
      .toPromise()
      .then((res: any) => {
        this.animeMovies = res.data.movies;
        console.log(res.data.movies);
      })
      .catch((err) => {
        this.errorMessage = 'Something went wrong , please try again.';
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
