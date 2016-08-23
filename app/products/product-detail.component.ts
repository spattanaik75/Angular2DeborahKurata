import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router} from 'angular2/router';

import { IProduct } from './product';
import { ProductService } from './product.service';
import { StarComponent } from '../shared/star.component';

@Component({
    templateUrl: 'app/products/product-detail.component.html',
    directives: [StarComponent]
})
export class ProductDetailComponent  {
    pageTitle: string = 'Product Detail';

    constructor (private _routeParams: RouteParams,
                 private _router: Router){
        let id = + this._routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }

    onBack():void {
        this._router.navigate(['Products']);
    }
   
}
