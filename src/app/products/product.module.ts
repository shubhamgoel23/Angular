import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-guard.service';
import { ProductDetailComponent } from './product-detail.component';



@NgModule({
    declarations:[
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent
    ],
    imports:[
        HttpClientModule,
        SharedModule,
        ProductRoutingModule
    ],
    providers:[
        ProductDetailGuard,
        ProductService
    ]
})
export class ProductModule {

}