import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviefilterComponent } from './moviefilter.component';

describe('MoviefilterComponent', () => {
  let component: MoviefilterComponent;
  let fixture: ComponentFixture<MoviefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviefilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
