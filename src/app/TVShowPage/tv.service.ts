import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
    providedIn:'root'
})


export class TVService{
    constructor ( private http:HttpClient){}
        showUrl ='https://api.themoviedb.org/3/tv/popular?api_key=eb41afc7abb223b07eb244c7df783eb4&language=en-US&page=1'
        
        getShow (){
            return this.http.get(this.showUrl);
        }
    }
