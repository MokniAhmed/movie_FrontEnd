import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  constructor(private http: HttpClient) {}

  getNewMovie() {
    return this.http.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=year&limit=9'
    );
  }
  getTopRatedMovie() {
    return this.http.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=9'
    );
  }
  getMovieByCategory(
    category: any = null,
    limit: any = null,
    search: any = null,
    filter: any = null
  ) {
    return this.http.get(
      'https://yts.mx/api/v2/list_movies.json?query_term=' +
        search +
        '&genre=' +
        category +
        '&limit=' +
        limit +
        '&sort_by=' +
        filter
    );
  }

  getMovieById(id: any) {
    return this.http.get(
      'https://yts.mx/api/v2/movie_details.json?movie_id=' + id
    );
  }
  getCommentByIdMovie(id: any) {
    return this.http.get(
      'https://yts.mx/api/v2/movie_details.json?movie_id=' + id
    );
  }
}
