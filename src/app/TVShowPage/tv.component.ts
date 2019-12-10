import { Component } from '@angular/core';
import { TVService } from './tv.service';


@Component({
    selector: 'tv',
    templateUrl: './tv.component.html',
    styleUrls: ['./tv.component.css']
})

export class TV{

    showArray: object = [];

    constructor(private tvService:TVService){
        this.tvService.getShow().subscribe(shows =>{
            this.showArray = shows;
            
        })
    }

}