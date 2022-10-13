import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/service/movie-service.service';

@Component({
  selector: 'app-moviefilter',
  templateUrl: './moviefilter.component.html',
  styleUrls: ['./moviefilter.component.scss'],
})
export class MoviefilterComponent implements OnInit {
  constructor(private moviesService: MovieServiceService) {}
  errorMessage = '';
  isLoading = false;
  movies = [];
  categorie = '';
  search = '';
  filter = '';
  ngOnInit(): void {
    this.initialize();
  }
  initialize() {
    this.errorMessage = '';
    this.isLoading = true;
    this.moviesService
      .getMovieByCategory(this.categorie, 20, this.search, this.filter)
      .toPromise()
      .then((res: any) => {
        if (res.data.movies != null) {
          this.movies = res.data.movies;
          console.log(res.data.movies);
        } else {
          this.errorMessage = "Oups, looks like we don't have any movie.";
        }
      })
      .catch(() => {
        console.log('err');
      })
      .finally(() => {
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      });
  }

  searchingFor(e: any) {
    const value = e.target.value;

    if (e.target.name == 'category') {
      this.categorie = e.target.value;
    }
    if (e.target.name == 'search') {
      this.search = e.target.value;
    }
    if (e.target.name == 'filter') {
      this.filter = e.target.value;
    }
    console.log(this.search, this.categorie);

    this.errorMessage = '';
    this.isLoading = true;
    this.moviesService
      .getMovieByCategory(this.categorie, 20, this.search, this.filter)
      .toPromise()
      .then((res: any) => {
        if (res.data.movies != null) {
          this.movies = res.data.movies;
          console.log(res.data.movies);
        } else {
          this.errorMessage = "Oups, looks like we don't have any movie.";
        }
      })
      .catch(() => {
        console.log('err');
      })
      .finally(() => {
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      });
  }
}
