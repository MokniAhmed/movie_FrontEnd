import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MoviedetaisComponent } from './page/moviedetais/moviedetais.component';
import { MoviefilterComponent } from './page/moviefilter/moviefilter.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movie/details/:id', component: MoviedetaisComponent },
  { path: 'movies', component: MoviefilterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
