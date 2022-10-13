import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  constructor() {}
  @Input() genres: any[] = [];
  @Input() title: any = '';
  x = '';
  ngOnInit(): void {
    this.x = '/' + this.genres[0];
  }
}
