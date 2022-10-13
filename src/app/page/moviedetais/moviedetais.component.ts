import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-moviedetais',
  templateUrl: './moviedetais.component.html',
  styleUrls: ['./moviedetais.component.scss'],
})
export class MoviedetaisComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieServiceService
  ) {}
  movie: any = {};
  id: any;
  rating = '';
  isLoading = true;
  errorMessage = '';
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getMovieDetails();
  }

  getMovieDetails() {
    this.movieService
      .getMovieById(this.id)
      .toPromise()
      .then((res: any) => {
        console.log(res.data);
        this.movie = res.data.movie;
        this.rating = res.data.movie.rating;
      })
      .catch((err) => {
        this.errorMessage = 'Something went wrong , please try again.';
      })
      .finally(() => {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      });
  }
}
