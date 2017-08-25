import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    errorMessage: string;
    product : IProduct;

    constructor(private _route: ActivatedRoute,
                    private _router: Router,
                    private _productService: ProductService){

    }

    ngOnInit():void{
        let id = +this._route.snapshot.params['id'];
        //this.pageTitle += `:${id}`;
        this.getProduct(id);
    }

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
          product => this.product = product,
          error => this.errorMessage = <any>error);
      }

    onBack():void{
        this._router.navigate(['/products']);
    }
}