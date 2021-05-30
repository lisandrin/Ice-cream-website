import {HttpClient} from '@angular/common/http'
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PromotedService{

    constructor(private http: HttpClient){}

    url: string = "http://localhost:3000/promoted"

    getAllPromoted(){
      return this.http.get(this.url);
    }
}
