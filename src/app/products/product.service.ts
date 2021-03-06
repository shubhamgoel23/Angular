import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do'; 

import { IProduct } from './product';

@Injectable()
export class  ProductService{
    //private _productUrl = 'http://localhost:5000/data';
    private _productUrl = './assets/products.json';
    constructor(private _http : HttpClient){}

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);

    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }
    
    private handleError(error : Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error')
    }

}