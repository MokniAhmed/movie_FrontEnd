import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetaisComponent } from './moviedetais.component';

describe('MoviedetaisComponent', () => {
  let component: MoviedetaisComponent;
  let fixture: ComponentFixture<MoviedetaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedetaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
