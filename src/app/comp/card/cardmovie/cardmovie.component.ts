import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardmovie',
  templateUrl: './cardmovie.component.html',
  styleUrls: ['./cardmovie.component.scss'],
})
export class CardmovieComponent implements OnInit {
  constructor() {}
  @Input() movies: any = {};
  x = this.movies.large_cover_image;
  y = 1000;
  ngOnInit(): void {
    this.y = Math.floor(Math.random() * 100);
  }
}
