import {HttpClient} from '@angular/common/http'
import { Injectable} from '@angular/core';

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
}
