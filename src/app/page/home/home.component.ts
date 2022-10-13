import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private movieService: MovieServiceService) {}

  newMovies: any[] = [];
  topRatedMovies: any[] = [];
  animated: any[] = [];
  isLoading = false;
  errorMessage = '';
  ngOnInit(): void {
    this.getNewMovie();
    this.getTopRatedMovie();
  }

  getNewMovie() {
    this.isLoading = true;
    this.movieService
      .getNewMovie()
      .toPromise()
      .then((res: any) => {
        this.newMovies = res.data.movies;
        console.log(res.data.movies);
      })
      .catch((err) => {
        this.errorMessage = 'Something went wrong , please try again.';
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
  getTopRatedMovie() {
    this.isLoading = true;
    this.movieService
      .getTopRatedMovie()
      .toPromise()
      .then((res: any) => {
        this.topRatedMovies = res.data.movies;
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
