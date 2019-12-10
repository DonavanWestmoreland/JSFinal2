import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCard } from './MovieCard/mCard.component';
import { TVCard } from './TVCard/tCard.component';
import { Navbar } from './Navbar/nav.component';
import { RouterModule } from '@angular/router';
import { Movie } from './MoviePage/movie.component';
import { TV } from './TVShowPage/tv.component';
import { Home } from './Home/home.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    MovieCard,
    TVCard,
    Navbar,
    Movie,
    TV,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'Movies',component : Movie},
      {path: 'TV', component: TV},
      {path: 'Home',component:Home},
      {path: '',redirectTo:'Home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
