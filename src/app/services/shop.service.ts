import {HttpClient} from '@angular/common/http'
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShopService{
    constructor(private http: HttpClient){

    }

    url: string = "http://localhost:3000/products"

    getAllProducts(){
        return this.http.get(this.url);
    }

    getById(id):Observable<any>{
        const url = `${this.url}/${id}`;
        return this.http.get(url);
    }
}
