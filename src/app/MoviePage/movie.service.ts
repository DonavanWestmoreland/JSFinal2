import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
    providedIn:'root'
})

export class MovieService{
    constructor( private http:HttpClient){}
    movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=eb41afc7abb223b07eb244c7df783eb4&language=en-US&page=1'

    getMovies(){
        return this.http.get(this.movieUrl);
    }
}