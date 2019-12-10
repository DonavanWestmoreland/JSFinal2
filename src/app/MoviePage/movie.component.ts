import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})

export class Movie{
    
    movieArray:object = [];

    constructor( private movieService:MovieService){

        this.movieService.getMovies().subscribe(movies =>{
            this.movieArray = movies
            console.log(this.movieArray);
        })
    }


}