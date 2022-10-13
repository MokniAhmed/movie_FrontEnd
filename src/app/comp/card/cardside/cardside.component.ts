import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardside',
  templateUrl: './cardside.component.html',
  styleUrls: ['./cardside.component.scss'],
})
export class CardsideComponent implements OnInit {
  constructor() {}
  @Input() movie: any = {};
  ngOnInit(): void {}
}
