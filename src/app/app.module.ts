import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './comp/all/navbar/navbar.component';
import { CarouselComponent } from './comp/all/carousel/carousel.component';
import { SidebarComponent } from './comp/all/sidebar/sidebar.component';
import { CardsideComponent } from './comp/card/cardside/cardside.component';
import { CardmovieComponent } from './comp/card/cardmovie/cardmovie.component';
import { HomeComponent } from './page/home/home.component';
import { MoviedetaisComponent } from './page/moviedetais/moviedetais.component';
import { HttpClientModule } from '@angular/common/http';
import { BreadcrumbComponent } from './comp/card/breadcrumb/breadcrumb.component';
import { RatingComponent } from './comp/all/rating/rating.component';
import { PreloaderComponent } from './comp/all/preloader/preloader.component';
import { MoviefilterComponent } from './page/moviefilter/moviefilter.component';
import { FooterComponent } from './comp/all/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    CarouselComponent,
    SidebarComponent,
    CardsideComponent,
    CardmovieComponent,
    HomeComponent,
    MoviedetaisComponent,
    BreadcrumbComponent,
    RatingComponent,
    PreloaderComponent,
    MoviefilterComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
